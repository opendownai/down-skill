#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const INDEX_PATH = path.join(process.cwd(), 'index.html');
const WORKER_PATH = path.join(process.cwd(), 'worker.js');
const OUTPUT_PATH = path.join(process.cwd(), 'dist', 'worker.js');
const MANIFEST_PATH = path.join(process.cwd(), 'manifest.json');
const SW_PATH = path.join(process.cwd(), 'sw.js');

const html = fs.readFileSync(INDEX_PATH, 'utf-8');
const htmlEscaped = html
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

const manifest = fs.readFileSync(MANIFEST_PATH, 'utf-8');
const manifestEscaped = manifest
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

const sw = fs.readFileSync(SW_PATH, 'utf-8');
const swEscaped = sw
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

let worker = fs.readFileSync(WORKER_PATH, 'utf-8');

worker = worker.replace(
  /^const INDEX_HTML = `[\s\S]*?`;/m,
  `const INDEX_HTML = \`${htmlEscaped}\`;`
);

worker = worker.replace(
  /^const MANIFEST_JSON = `[\s\S]*?`;/m,
  `const MANIFEST_JSON = \`${manifestEscaped}\`;`
);

worker = worker.replace(
  /^const SW_JS = `[\s\S]*?`;/m,
  `const SW_JS = \`${swEscaped}\`;`
);

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, worker);

console.log('Built:', OUTPUT_PATH);
