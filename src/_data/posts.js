// This file is a wrapper around ./lib/getPosts.js because:
// - getPosts is needed in norska.config.js hooks as well
// - we load it using a forceReload require, so it's live reloaded
const firostRequire = require('firost/require');
const getPosts = firostRequire('../../lib/getPosts.js', { forceReload: true });

module.exports = async () => {
  return await getPosts();
};
