import { Dummy } from '@musica-sacra/dummy';
import { StoryObj } from '@storybook/react';

const meta = {
    title: '@musica-sacra/Dummy/components/Dummy',
    component: Dummy,
    args: {
        dummyText: 'Dummy text',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
