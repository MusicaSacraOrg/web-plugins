import dts from 'rollup-plugin-dts';
import { createBaseConfig } from '../../rollup.config.base';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJson = require('./package.json');

export default [
    createBaseConfig(),
    {
        input: 'src/main.ts',
        output: [
            {
                file: packageJson.types,
            },
        ],
        plugins: [dts.default()],
        external: [/\.scss/],
    },
];
