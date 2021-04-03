const pMap = require('golgoth/pMap');
// const pProps = require('golgoth/pProps');
const getPosts = require('./lib/getPosts.js');
// const paginate = require('./lib/paginate.js');
const themeConfig = require('./src/_data/theme.js');
const _ = require('golgoth/lodash');

module.exports = {
  cloudinary: {
    bucketName: 'pixelastic-painting',
  },
  hooks: {
    async afterHtml({ createPage }) {
      // Generate all /page-X/ history
      const posts = await getPosts();
      const postsPerPage = _.get(themeConfig, 'postsPerPage');
      const maxPage = Math.ceil(posts.length / postsPerPage);

      await pMap(_.range(2, maxPage + 1), async (pageNumber) => {
        const template = 'index.pug';
        const destination = `page-${pageNumber}/index.html`;
        const data = { hooks: { pageNumber } };
        await createPage(template, destination, data);
      });
    },
    // Homepage pagination
    // await paginate(
    //   allWithoutWip,
    //   '_includes/templates/paginate.pug',
    //   (n) => {
    //     if (n === 0) {
    //       return 'index.html';
    //     }
    //     return `page-${n + 1}/index.html`;
    //   },
    //   { createPage }
    // );
    // Tags paginations
    // await pProps(byTag, async (posts, tagName) => {
    //   await paginate(
    //     posts,
    //     '_includes/templates/paginate.pug',
    //     (n) => {
    //       const prefix = `tags/${tagName}`;
    //       if (n === 0) {
    //         return `${prefix}/index.html`;
    //       }
    //       return `${prefix}/page-${n + 1}/index.html`;
    //     },
    //     { createPage }
    //   );
    // });
    // },
  },
};
