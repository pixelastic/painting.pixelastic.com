const pMap = require('golgoth/lib/pMap');
const getPosts = require('./lib/getPosts.js');
const paginate = require('./lib/paginate.js');
module.exports = {
  cloudinary: {
    bucketName: 'pixelastic-painting',
  },
  hooks: {
    async afterHtml({ createPage }) {
      const { all, allWithoutWip } = await getPosts();

      // Create one page for each post
      await pMap(all, async (post) => {
        const template = '_includes/templates/post.pug';
        const destination = `${post.slug}/index.html`;
        await createPage(template, destination, { post });
      });

      // Create paginated pages
      await paginate(
        allWithoutWip,
        '_includes/templates/paginate.pug',
        (n) => {
          if (n === 0) {
            return 'index.html';
          }
          return `page-${n + 1}/index.html`;
        },
        { createPage }
      );
    },
  },
};
