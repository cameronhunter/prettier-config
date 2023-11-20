import { test, expect } from 'vitest';
import { format, resolveConfig } from 'prettier';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const suite = test.each`
    fixture         | ext
    ${'typescript'} | ${'ts'}
`;

suite('$fixture', async ({ fixture, ext }) => {
    const filepath = resolve(__dirname, '__fixtures__', fixture, `after.${ext}`);

    const before = await readFile(resolve(__dirname, '__fixtures__', fixture, `before.${ext}`), 'utf-8');
    const after = await readFile(filepath, 'utf-8');

    const config = await resolveConfig(__dirname);

    await expect(format(before, { ...config, filepath })).resolves.toEqual(after);
});
