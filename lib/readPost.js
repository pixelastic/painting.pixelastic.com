const frontMatter = require('front-matter');
const path = require('path');
const read = require('firost/read');
const dayjs = require('golgoth/dayjs');
const _ = require('golgoth/lodash');

// const excerptHtml = require('excerpt-html');

const postHelper = async function (filepath) {
  const content = await read(filepath);
  const { attributes: meta, body } = frontMatter(content);
  return {
    __parsed: null,
    slug() {
      return path.basename(path.dirname(filepath));
    },
    url() {
      return `${this.slug()}/`;
    },
    meta() {
      return meta;
    },
    displayDate() {
      const { date } = meta;
      return dayjs(date).format('D MMMM YYYY');
    },
    editUrl() {
      const relativeFile = path.relative('./src', filepath);
      return `https://github.com/pixelastic/painting.pixelastic.com/edit/master/src/${relativeFile}`;
    },
    tags() {
      const { tags } = meta;
      return _.chain(tags)
        .split(',')
        .map(_.trim)
        .map((tagName) => {
          return {
            url: `tags/${tagName}/`,
            name: tagName,
          };
        })
        .value();
    },
    body() {
      return body;
    },
  };
};

module.exports = async (filepath) => {
  const helper = await postHelper(filepath);
  const body = helper.body();
  const displayDate = helper.displayDate();
  const editUrl = helper.editUrl();
  const meta = helper.meta();
  const slug = helper.slug();
  const tags = helper.tags();
  const url = helper.url();

  return {
    ...meta,
    body,
    displayDate,
    editUrl,
    slug,
    tags,
    url,
  };
};
