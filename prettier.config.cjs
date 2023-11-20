/**
 * @type {import('prettier').Config}
 */
const config = {
	/**
	 * It's the modern day, we have wide screens.
	 */
	printWidth: 120,

	/**
	 * A stylistic preference.
	 */
	singleQuote: true,

	/**
	 * It's better for accessibility _and_ you can your own tab size preference
	 * in your editor (and Github).
	 */
	useTabs: true,

	/**
	 * This is the default in `prettier@3` but not in `prettier@2`. Setting it
	 * explicitly maintains consistency between them.
	 */
	trailingComma: 'all',

	overrides: [
		{
			/**
			 * Package managers will use 2 space indentation on any generated
			 * files, so we have to stay consistent.
			 */
			files: ['*.json', '*.yaml', '*.yml'],
			options: {
				tabWidth: 2,
			},
		},
		{
			/**
			 * Reduce the print width for better prose readability.
			 */
			files: ['*.md', '*.markdown'],
			options: {
				printWidth: 80,
				proseWrap: 'always',
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

module.exports = config;
