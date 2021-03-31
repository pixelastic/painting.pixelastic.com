const _ = require('golgoth/lodash');
const dayjs = require('golgoth/dayjs');

module.exports = {
  postData(pugData, pugUrl) {
    const title = _.get(pugData, 'meta.title');

    const url = this.postUrl(pugUrl);
    const editUrl = this.postEditUrl(pugUrl);
    const displayDate = this.postDisplayDate(pugData);
    const tags = this.postTags(pugData);

    return {
      url,
      title,
      editUrl,
      displayDate,
      tags,
    };
  },
  postUrl(pugUrl) {
    return _.chain(pugUrl).get('here').trimStart('/').value();
  },
  postEditUrl(pugUrl) {
    const sourceFile = _.get(pugUrl, 'sourceFile');
    return `https://github.com/pixelastic/painting.pixelastic.com/edit/master/src/${sourceFile}`;
  },
  postDisplayDate(pugData) {
    const date = _.get(pugData, 'meta.date');
    return dayjs(date).format('MMMM D, YYYY');
  },
  postTags(pugData) {
    const tags = _.chain(pugData)
      .get('meta.tags', '')
      .split(',')
      .map(_.trim)
      .value();
    return _.map(tags, (tag) => {
      return this.tagData(tag);
    });
  },

  tagData(tagName) {
    const url = this.tagUrl(tagName);
    return {
      name: tagName,
      url,
    };
  },
  tagUrl(tagName) {
    return `tags/${tagName}/`;
  },
};
