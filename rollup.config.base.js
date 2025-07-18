import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';

export const createBaseConfig = () => {
    return {
        input: 'src/main.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: 'dist/index.mjs',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve({ browser: true }),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            copy({
                targets: [
                    {
                        src: 'src/**/*.scss',
                        dest: 'dist',
                    },
                    {
                        src: 'src/**/__tests__/*.stories.@(js|jsx|ts|tsx)',
                        dest: 'dist',
                    },
                ],
                flatten: false,
            }),
        ],
        external: ['react', 'react-dom'],
    };
};

export const createTypeConfig = () => {
    return {
        input: 'src/main.ts',
        output: [
            {
                file: 'dist/index.d.ts',
            },
        ],
        plugins: [dts.default()],
        external: [/\.scss/, /\.stories\.(js|jsx|ts|tsx|mdx)?$/],
    };
};
