import type { Config } from "prettier";

const config: Config = {
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
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

export = config;
