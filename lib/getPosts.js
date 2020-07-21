const glob = require('firost/lib/glob');
const pMap = require('golgoth/lib/pMap');
const readMarkdown = require('./readMarkdown.js');
const _ = require('golgoth/lib/lodash');
const dayjs = require('golgoth/lib/dayjs');

module.exports = async () => {
  const filepaths = await glob('./src/*/index.md');
  const rawPosts = await pMap(filepaths, readMarkdown);

  // Sort posts by date
  const all = _.chain(rawPosts, 'date')
    .sortBy('date')
    .reverse()
    .map((post) => {
      const displayDate = dayjs(post.date).format('MMMM D, YYYY');
      return {
        ...post,
        displayDate,
      };
    })
    .value();
  // Keep a list without the wip
  const allWithoutWip = _.reject(all, (post) => {
    return _.includes(post.tags, 'wip');
  });
  // Group in tags
  const byTag = _.transform(
    all,
    (result, post) => {
      _.each(post.tags, (tag) => {
        if (!result[tag]) {
          result[tag] = [];
        }
        result[tag].push(post);
      });
    },
    {}
  );

  return {
    all,
    allWithoutWip,
    byTag,
  };
};
