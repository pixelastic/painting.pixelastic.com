const _ = require('golgoth/lodash');
const path = require('path');

module.exports = {
  latestPosts(posts) {
    return _.chain(posts).sortBy('date').reverse().value();
  },
  findPostByUrl(posts, url) {
    const slug = path.dirname(url.sourceFile);
    return posts[slug];
  },
};
