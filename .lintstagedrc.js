const config = require('aberlaas/configs/lintstaged.js');
module.exports = {
  ...config,
  '*.png': ['yarn aberlaas compress --png'],
  '*.jpg': ['./scripts/compress'],
};
