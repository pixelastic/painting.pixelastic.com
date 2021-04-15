const firostRequire = require('firost/require');
const getPosts = firostRequire('./getPosts.js', { forceReload: true });
const _ = require('golgoth/lodash');

module.exports = async () => {
  const posts = await getPosts();

  const tags = {};
  _.each(posts, (post) => {
    _.each(post.tags, (tag) => {
      const key = tag.url;
      if (!_.has(tags, key)) {
        _.set(tags, key, { ...tag, posts: [] });
      }

      _.get(tags, `${key}.posts`).push(post);
    });
  });

  return tags;
};
