const _ = require('golgoth/lodash');
const path = require('path');
const readPost = require('../../lib/readPost.js');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  findPostByUrl(posts, url) {
    const slug = path.dirname(url.sourceFile);
    const postInCache = _.find(posts, { slug });

    // In prod, we read the local data cache
    if (isProduction) {
      return postInCache;
    }

    // In dev, we re-read from the file, so live-reload correctly updates the
    // content
    const filepath = path.resolve(`./src/${url.sourceFile}`);
    const freshPost = readPost(filepath);
    return {
      ...postInCache,
      ...freshPost,
    };
  },
};
