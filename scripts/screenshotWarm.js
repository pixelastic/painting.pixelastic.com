import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const metadataPath = path.join(__dirname, '../public/screenshotWarm.json');
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
const urls = metadata.screenshotWarmup || [];

// Make an HTTP request to each one, to trigger their generation
for (const url of urls) {
  console.log(`Warming up screenshot for ${url}`);
  fetch(url);
}
