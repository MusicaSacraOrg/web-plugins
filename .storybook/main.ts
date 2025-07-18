import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
    stories: [
        '../packages/*/src/**/__tests__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    webpackFinal: async (config) => {
        config.module?.rules?.push({
            test: /\.scss$/,
            include: path.resolve(__dirname, '../packages'),
            use: ['style-loader', 'css-loader', 'sass-loader'],
        });
        return config;
    },
};
export default config;
