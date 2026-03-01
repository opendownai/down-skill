#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const INDEX_PATH = path.join(process.cwd(), 'index.html');
const WORKER_PATH = path.join(process.cwd(), 'worker.js');
const OUTPUT_PATH = path.join(process.cwd(), 'dist', 'worker.js');

const html = fs.readFileSync(INDEX_PATH, 'utf-8');
const htmlEscaped = html
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

let worker = fs.readFileSync(WORKER_PATH, 'utf-8');

const constMatch = worker.match(/^const INDEX_HTML = `[\s\S]*?`;/m);
if (constMatch) {
  worker = worker.replace(constMatch[0], `const INDEX_HTML = \`${htmlEscaped}\`;`);
} else {
  console.error('Could not find INDEX_HTML constant in worker.js');
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, worker);

console.log('Built:', OUTPUT_PATH);
