const glob = require('firost/glob');
const firostRequire = require('firost/require');
const pMap = require('golgoth/pMap');
const readPost = firostRequire('../../lib/readPost.js', { forceReload: true });

module.exports = async (options) => {
  const { fromPath } = options;
  const filepaths = await glob(fromPath('*/index.md'));

  const posts = {};
  await pMap(filepaths, async (filepath) => {
    const postData = await readPost(filepath);
    posts[postData.slug] = postData;
  });

  return posts;
};
