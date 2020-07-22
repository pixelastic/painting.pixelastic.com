const _ = require('golgoth/lib/lodash');
const pMap = require('golgoth/lib/pMap');

module.exports = async (items, template, pageToPath, userOptions) => {
  const defaultOptions = {
    chunkSize: 10,
  };
  const options = { ...defaultOptions, ...userOptions };
  const { chunkSize, createPage } = options;

  // Get the list of all pages with their url and list of posts
  const chunks = _.chunk(items, chunkSize);
  const pages = await pMap(chunks, async (posts, pageIndex) => {
    const destination = pageToPath(pageIndex);
    const url = destination.replace('index.html', '');
    return {
      destination,
      posts,
      url,
      pageIndex,
    };
  });

  // Create a page for each
  await pMap(pages, async (page) => {
    const { destination, posts } = page;
    const paginationData = _.chain(pages)
      .cloneDeep()
      .map((pageCandidate) => {
        pageCandidate.isCurrentPage = pageCandidate.destination === destination;
        return pageCandidate;
      })
      .value();
    await createPage(template, destination, {
      posts,
      paginationData,
    });
  });
};
