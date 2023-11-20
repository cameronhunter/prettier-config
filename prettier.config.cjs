module.exports = {
	printWidth: 120,
	singleQuote: true,
	useTabs: true,
	trailingComma: 'all',
	overrides: [
		{
			files: ['*.json', '*.yaml', '*.yml'],
			options: {
				tabWidth: 2,
			},
		},
		{
			files: ['*.md', '*.markdown'],
			options: {
				parser: 'markdown',
				printWidth: 80,
				tabWidth: 2,
				proseWrap: 'always',
			},
		},
	],
};
