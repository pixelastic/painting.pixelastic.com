const getPosts = require('../../lib/getPosts.js');
const _ = require('golgoth/lib/lodash');

module.exports = async () => {
  const posts = await getPosts();
  return _.chain(posts)
    .get('byTag', {})
    .map((tagPosts, name) => {
      const slug = _.camelCase(name);
      const count = tagPosts.length;
      const url = `tags/${slug}`;
      return {
        name,
        slug,
        url,
        count,
      };
    })
    .sortBy('count')
    .reverse()
    .value();
};
