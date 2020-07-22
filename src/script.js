const lazyload = require('norska/frontend/lazyload');
const mediumZoom = require('medium-zoom').default;
lazyload.init();
mediumZoom('.prose img');
