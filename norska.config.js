const pMap = require('golgoth/pMap');
const pProps = require('golgoth/pProps');
const getPosts = require('./lib/getPosts.js');
const getTags = require('./lib/getTags.js');
const themeConfig = require('./src/_data/theme.js');
const _ = require('golgoth/lodash');

const ENABLE_PAGINATION = true;
const ENABLE_TAGS = true;

module.exports = {
  cloudinary: 'pixelastic-painting',
  hooks: {
    async afterHtml({ createPage }) {
      const posts = await getPosts();

      // Generate all /page-X/ history
      if (ENABLE_PAGINATION) {
        const postsPerPage = _.get(themeConfig, 'postsPerPage');
        const maxPage = Math.ceil(posts.length / postsPerPage);
        await pMap(_.range(2, maxPage + 1), async (pageNumber) => {
          const template = 'index.pug';
          const destination = `page-${pageNumber}/index.html`;
          const data = { hooks: { pageNumber } };
          await createPage(template, destination, data);
        });
      }

      // Generate all /tags/xxx pages
      if (ENABLE_TAGS) {
        const tags = await getTags();
        await pProps(tags, async (tag) => {
          const template = '_includes/templates/tags.pug';
          const destination = `${tag.url}index.html`;
          const data = { hooks: { tag } };
          await createPage(template, destination, data);
        });
      }
    },
  },
};
