const dedent = require('dedent');
const write = require('firost/lib/write');
const _ = require('golgoth/lib/lodash');
const path = require('path');
const run = require('firost/lib/run');
const exists = require('firost/lib/exists');
const captureOutput = require('firost/lib/captureOutput');
const dayjs = require('golgoth/lib/dayjs');

(async () => {
  const title = process.argv.slice(2).join(' ');
  const today = dayjs().format('YYYY-MM-DD');

  const content = dedent`
  ---
  title: ${title}
  tags: terrain, miniature, wip
  date: ${today}
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
