import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LayoutWithSidebar } from '@musica-sacra/layout';

const DummyContent = () => (
    <div>
        <h1>Main Content</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        <h2>Lorem Ipsum</h2>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
        <button
            style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
            }}
        >
            Akčné tlačidlo
        </button>
    </div>
);

const meta: Meta<typeof LayoutWithSidebar> = {
    title: '@musica-sacra/Layout/components/LayoutWithSidebar',
    component: LayoutWithSidebar,

    argTypes: {
        className: {
            control: 'text',
        },

        sidebar: { control: false },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
    render: (args) => (
        <LayoutWithSidebar {...args} sidebar={<div></div>}>
            <DummyContent />
        </LayoutWithSidebar>
    ),
};

export const Default: Story = {
    ...Template,
};

export const MixedContentLength: Story = {
    render: (args) => (
        <LayoutWithSidebar
            {...args}
            sidebar={
                <div style={{}}>
                    <h4>Long sidebar</h4>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                    <p>Len pár položiek.</p>
                </div>
            }
        >
            <DummyContent />
        </LayoutWithSidebar>
    ),
    args: {
        isPageLayout: true,
    },
};
