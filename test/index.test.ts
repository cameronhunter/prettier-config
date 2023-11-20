import { test, expect } from 'vitest';
import { format } from 'prettier';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import config from '../src/index';

test('Formats a file as expected', async () => {
    const beforePath = resolve(__dirname, '__fixtures__', 'before.ts');

    const before = await readFile(beforePath, 'utf-8');
    const after = await readFile(resolve(__dirname, '__fixtures__', 'after.ts'), 'utf-8');

    await expect(format(before, { ...config, filepath: beforePath })).resolves.toEqual(after);
});
