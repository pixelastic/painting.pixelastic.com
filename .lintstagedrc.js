const config = require('aberlaas/lib/configs/lintstaged.js');
module.exports = {
  ...config,
  '*.png': ['yarn aberlaas compress --png'],
};
