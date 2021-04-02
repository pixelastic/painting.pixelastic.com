const _ = require('golgoth/lodash');
const path = require('path');

module.exports = {
  findPostByUrl(posts, url) {
    const slug = path.dirname(url.sourceFile);
    return _.find(posts, { slug });
  },
};
