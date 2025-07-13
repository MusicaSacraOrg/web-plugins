import { LayoutBasic } from '../LayoutBasic';
import { StoryObj } from '@storybook/react';

const meta = {
    title: 'layout/LayoutBasic',
    component: LayoutBasic,
    args: {
        isPageLayout: true,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
