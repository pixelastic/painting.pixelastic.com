const firostRequire = require('firost/require');
const readPost = firostRequire('./readPost.js', { forceReload: true });
const glob = require('firost/glob');
const pMap = require('golgoth/pMap');
const _ = require('golgoth/lodash');

module.exports = async () => {
  const filepaths = await glob('./src/*/index.md');

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
