const _ = require('golgoth/lib/lodash');
const pMap = require('golgoth/lib/pMap');

module.exports = async (items, template, pageToPath, userOptions) => {
  const defaultOptions = {
    chunkSize: 10,
  };
  const options = { ...defaultOptions, ...userOptions };
  const { chunkSize, createPage } = options;

  const chunks = _.chunk(items, chunkSize);
  await pMap(chunks, async (chunk, chunkIndex) => {
    const destination = pageToPath(chunkIndex);
    await createPage(template, destination, { paginatedPosts: chunk });
  });
};
