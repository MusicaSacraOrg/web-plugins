import React from 'react';
import { LayoutBasic } from '../LayoutBasic';
import type { StoryObj } from '@storybook/react';

const meta = {
    title: '@musica-sacra/Layout/components/LayoutBasic',
    component: LayoutBasic,
    args: {
        children: <p>LayoutBasic content</p>,
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
