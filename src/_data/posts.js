const glob = require('firost/lib/glob');
const read = require('firost/lib/read');
const pMap = require('golgoth/lib/pMap');

module.exports = async () => {
  const filepaths = await glob('./src/*/index.md');
  const posts = await pMap(filepaths, read);
  return posts;
};
