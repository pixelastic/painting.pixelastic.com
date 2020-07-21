const frontMatter = require('front-matter');
const path = require('path');
const read = require('firost/lib/read');
const excerptHtml = require('excerpt-html');

module.exports = async (filepath) => {
  const slug = path.basename(path.dirname(filepath));
  const rawContent = await read(filepath);
  const { body, attributes } = frontMatter(rawContent);
  const excerpt = excerptHtml(body);
  return { ...attributes, slug, excerpt, body };
};
