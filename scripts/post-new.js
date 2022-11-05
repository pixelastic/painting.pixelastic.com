const dedent = require('dedent');
const write = require('firost/write');
const _ = require('golgoth/lodash');
const path = require('path');
const run = require('firost/run');
const exists = require('firost/exists');
const captureOutput = require('firost/captureOutput');
const dayjs = require('golgoth/dayjs');

(async () => {
  if (process.argv.length < 3) {
    console.info('Usage: yarn run post:new "Post title"');
    process.exit(1);
  }
  const title = process.argv.slice(2).join(' ');
  const today = dayjs().format('YYYY-MM-DD');

  const content = dedent`
  ---
  title: "${title}"
  tags: terrain
  date: ${today}
  layout: post
  ---


`;

  const slug = _.camelCase(title);
  const filepath = path.resolve(`./src/${slug}/index.md`);
  if (!(await exists(filepath))) {
    await write(content, filepath);
  }

  await captureOutput(async () => {
    await run(`typora ${filepath}`);
  });
})();
