import { Children } from 'react';
import { LayoutBasic } from '../LayoutBasic';
import { StoryObj } from '@storybook/react';

export function Dummy() {
    return <div style={{ backgroundColor: 'red' }}>{`Your dummy text`}</div>;
}

const meta = {
    title: 'layout/LayoutBasic',
    component: LayoutBasic,
    args: {
        isPageLayout: true,
        children: Dummy,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
