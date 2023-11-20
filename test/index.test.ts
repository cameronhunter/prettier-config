import { test, expect } from 'vitest';
import { format, type Config } from 'prettier';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import config from '../prettier.config.cjs';

const suite = test.each`
	fixture         | ext
	${'typescript'} | ${'ts'}
`;

suite('$fixture', async ({ fixture, ext }) => {
	const filepath = resolve(__dirname, '__fixtures__', fixture, `before.${ext}`);

	const before = await readFile(filepath, 'utf-8');
	const after = await readFile(resolve(__dirname, '__fixtures__', fixture, `after.${ext}`), 'utf-8');

	await expect(format(before, { ...(config as Config), filepath })).resolves.toEqual(after);
});
