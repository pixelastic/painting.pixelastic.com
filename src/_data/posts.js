const glob = require('firost/glob');
const firostRequire = require('firost/require');
const pMap = require('golgoth/pMap');
const readPost = firostRequire('../../lib/readPost.js', { forceReload: true });
const _ = require('golgoth/lodash');

module.exports = async (options) => {
  const { fromPath } = options;
  const filepaths = await glob(fromPath('*/index.md'));

  // Read all posts
  let posts = await pMap(filepaths, readPost);

  // Sort by date
  posts = _.chain(posts).sortBy('date').reverse().value();

  // Add previous/next
  posts = _.map(posts, (post, index) => {
    post.previousPost = posts[index - 1];
    post.nextPost = posts[index + 1];
    return post;
  });

  return posts;
};
