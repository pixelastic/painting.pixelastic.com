const glob = require('firost/lib/glob');
const pMap = require('golgoth/lib/pMap');
const readMarkdown = require('./lib/readMarkdown.js');
module.exports = {
  cloudinary: {
    bucketName: 'pixelastic-painting',
  },
  hooks: {
    async afterHtml({ createPage }) {
      const template = '_includes/templates/post.pug';
      const allPosts = await glob('./src/*/index.md');
      await pMap(allPosts, async (filepath) => {
        const post = await readMarkdown(filepath);
        const destination = `${post.slug}/index.html`;
        await createPage(template, destination, { post });
      });
    },
  },
};
