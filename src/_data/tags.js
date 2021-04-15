// This file is a wrapper around ./lib/getTags.js because:
// - getTags is needed in norska.config.js hooks as well
// - we load it using a forceReload require, so it's live reloaded
const firostRequire = require('firost/require');
const getTags = firostRequire('../../lib/getTags.js', { forceReload: true });

module.exports = async () => {
  return await getTags();
};
