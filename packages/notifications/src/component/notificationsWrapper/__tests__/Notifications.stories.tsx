import { Notifications } from '@musica-sacra/notifications';
import { StoryObj } from '@storybook/react';

const mockNotifications = [
    {
        id: '1',
        message: 'This is an info notification',
        type: 'info',
        timeout: 3000,
    },
    {
        id: '2',
        message: 'Success! Your action was successful.',
        type: 'success',
        timeout: 3000,
    },
    {
        id: '3',
        message: 'Warning: Please check your inputs.',
        type: 'warning',
        timeout: 3000,
    },
    {
        id: '4',
        message: 'Error: Something went wrong!',
        type: 'error',
        timeout: 3000,
    },
    {
        id: '5',
        message: 'Loading: Processing your request...',
        type: 'loading',
        timeout: 3000,
    },
];

const meta = {
    title: '@musica-sacra/notifications',
    component: Notifications,
    args: {
        notifications: mockNotifications,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
