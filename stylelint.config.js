import config from 'aberlaas/configs/stylelint';

export default {
  ...config,
  rules: {
    ...config.rules,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'import',
          'plugin',
          'theme',
          'source',
        ],
      },
    ],
  },
};
