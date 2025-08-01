import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@musica-sacra/loader';

const meta: Meta<typeof Loader> = {
    title: '@musica-sacra/Loader/components/loader',
    component: Loader,
    args: {
        loading: true,
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NotHiddenLoader: Story = {
    args: {
        loading: true,
        children: <p>Text is hidden</p>,
    },
};

export const HiddenLoader: Story = {
    args: {
        loading: false,
        children: <p>Loader is hidden, and this text is shown.</p>,
    },
};
