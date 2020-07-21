const glob = require('firost/lib/glob');
const pMap = require('golgoth/lib/pMap');
const readMarkdown = require('../../lib/readMarkdown.js');

module.exports = async () => {
  const filepaths = await glob('./src/*/index.md');
  const posts = await pMap(filepaths, readMarkdown);
  return posts;
};
