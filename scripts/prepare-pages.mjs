import { access, copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(here, '../dist/client');
const downloads = path.join(output, 'downloads.html');

await access(path.join(output, 'index.html'));
await access(downloads);
await mkdir(path.join(output, 'downloads'), { recursive: true });
await copyFile(downloads, path.join(output, 'downloads/index.html'));
await writeFile(path.join(output, '.nojekyll'), '');
