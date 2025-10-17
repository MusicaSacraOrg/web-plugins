import type { Meta, StoryObj } from '@storybook/react';
import { King } from '../King';

const meta: Meta<typeof King> = {
    title: '@musica-sacra/Layout/components/King',
    component: King,
    args: {
        children: 'children',
        leftSidebar: 'leftSidebar',
        rightSidebar: 'rightSidebar',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
