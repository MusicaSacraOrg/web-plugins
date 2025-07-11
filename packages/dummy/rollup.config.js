import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageJson = require('./package.json');

export default [
    {
        input: 'src/main.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true,
            }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            postcss({ extract: true }),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'src/main.ts',
        output: [
            {
                file: packageJson.types,
            },
        ],
        plugins: [dts.default()],
        external: [/\.css/],
    },
];
