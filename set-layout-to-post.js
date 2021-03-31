const firost = require('firost');
const pMap = require('golgoth/pMap');
const _ = require('golgoth/lodash');

(async () => {
  const files = await firost.glob('./src/*/index.md');
  await pMap(files, async (filepath) => {
    const content = await firost.read(filepath);
    if (_.includes(content, 'layout: post')) {
      return;
    }
    const newContent = _.replace(content, '---\n\n', 'layout: post\n---\n\n');
    await firost.write(newContent, filepath);
  });
})();
