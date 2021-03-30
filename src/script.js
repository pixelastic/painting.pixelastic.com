const theme = require('norska/theme');
const mediumZoom = require('medium-zoom').default;
(async () => {
  await theme.init();
  mediumZoom('.prose img');
})();
