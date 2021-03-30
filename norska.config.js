// const pMap = require('golgoth/pMap');
// const pProps = require('golgoth/pProps');
// const getPosts = require('./lib/getPosts.js');
// const paginate = require('./lib/paginate.js');
module.exports = {
  cloudinary: {
    bucketName: 'pixelastic-painting',
  },
  // hooks: {
  //   async afterHtml({ createPage }) {
  //     const { all, allWithoutWip, byTag } = await getPosts();

  //     // Post details
  //     await pMap(all, async (post) => {
  //       const template = '_includes/templates/post.pug';
  //       const destination = `${post.slug}/index.html`;
  //       await createPage(template, destination, { post });
  //     });

  //     // Homepage pagination
  //     await paginate(
  //       allWithoutWip,
  //       '_includes/templates/paginate.pug',
  //       (n) => {
  //         if (n === 0) {
  //           return 'index.html';
  //         }
  //         return `page-${n + 1}/index.html`;
  //       },
  //       { createPage }
  //     );

  //     // Tags paginations
  //     await pProps(byTag, async (posts, tagName) => {
  //       await paginate(
  //         posts,
  //         '_includes/templates/paginate.pug',
  //         (n) => {
  //           const prefix = `tags/${tagName}`;
  //           if (n === 0) {
  //             return `${prefix}/index.html`;
  //           }
  //           return `${prefix}/page-${n + 1}/index.html`;
  //         },
  //         { createPage }
  //       );
  //     });
  //   },
  // },
};
