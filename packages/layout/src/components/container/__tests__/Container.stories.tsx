import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container';

const meta: Meta<typeof Container> = {
    title: '@musica-sacra/Layout/components/Container',
    component: Container,
    args: {
        children: <p>Container content</p>,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PageLayoutContainer: Story = {
    args: {
        isPageContainer: true,
    },
};
