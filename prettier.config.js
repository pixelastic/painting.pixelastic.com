import config from 'aberlaas/configs/prettier';

export default {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-go-template'],
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
  ],
};
