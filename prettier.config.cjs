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
     * FIXME: I want this to be `true`, but it's messing with `package.json` files.
     *
     * It's better for accessibility _and_ you can your own tab size preference
     * in your editor (and Github).
     */
    useTabs: false,
    tabWidth: 4,

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
            files: ['*.json'],
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
            },
        },
    ],
};

module.exports = config;
