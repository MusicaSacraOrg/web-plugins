import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container';

const meta: Meta<typeof Container> = {
    title: '@musica-sacra/Layout/components/Container',
    component: Container,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isPageContainer: false,
        children: <p>Container content</p>,
    },
};

export const PageLayoutContainer: Story = {
    args: {
        isPageContainer: true,
        children: <p>Container content - full page height</p>,
    },
};
