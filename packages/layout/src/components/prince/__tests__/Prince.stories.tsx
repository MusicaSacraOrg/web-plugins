import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Prince } from '../Prince';

const meta = {
    title: '@musica-sacra/Layout/components/Prince',
    component: Prince,
    args: {
        children: <p>Prince layout content</p>,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsPageLayout: Story = {
    args: {
        isPageLayout: true,
    },
};
