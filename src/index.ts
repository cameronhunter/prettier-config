import type { Config } from 'prettier';

const config: Config = {
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'all',
    useTabs: true,
    overrides: [
        {
            files: ['*.json', '*.yaml', '*.yml'],
            options: {
                useTabs: false,
                tabWidth: 2,
            },
        },
    ],
};

exports = config;
