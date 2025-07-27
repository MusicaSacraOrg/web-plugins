import React from 'react';
import { LayoutBasic } from '../LayoutBasic';
import type { Meta, StoryObj } from '@storybook/react';

export function Dummy() {
    return (
        <div
            style={{
                backgroundColor: 'orange',
                padding: '20px',
                border: '1px solid black',
                textAlign: 'center',
            }}
        >
            <h3>Obsah dummy komponentu</h3>
            <p>Toto je nejaký text, ktorý simuluje obsah.</p>
        </div>
    );
}

const meta: Meta<typeof LayoutBasic> = {
    title: 'Layouts/LayoutBasic',
    component: LayoutBasic,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <LayoutBasic {...args}>
            {}
            <Dummy />
        </LayoutBasic>
    ),
    args: {
        isPageLayout: true,
    },
};

export const Empty: Story = {
    render: (args) => <LayoutBasic {...args}>{}</LayoutBasic>,
    args: {
        isPageLayout: false,
    },
};

export const WithMultipleDummies: Story = {
    render: (args) => (
        <LayoutBasic {...args}>
            <Dummy />
            <Dummy />
            <div
                style={{
                    backgroundColor: 'lightblue',
                    padding: '15px',
                    marginTop: '10px',
                }}
            >
                Toto je ďalší simulovaný blok obsahu.
            </div>
        </LayoutBasic>
    ),
    args: {
        isPageLayout: true,
    },
};
