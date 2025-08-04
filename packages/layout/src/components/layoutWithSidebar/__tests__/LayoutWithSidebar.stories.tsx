import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LayoutWithSidebar } from '../LayoutWithSidebar';

const DummySidebarContent: React.FC = () => (
    <div
        style={{
            backgroundColor: '#f0f0f0',
            borderRight: '1px solid #ccc',
            minHeight: '100vh',
        }}
    ></div>
);

const DummyContent: React.FC = () => (
    <div
        style={{
            padding: '20px',
            backgroundColor: '#ffffff',
            minHeight: '100vh',
        }}
    >
        <h1>Hlavný obsah stránky</h1>
        <p>
            Toto je placeholder pre hlavný obsah. Môže tu byť text, obrázky,
            formuláre alebo akýkoľvek iný komponent. Cieľom tohto layoutu je
            poskytnúť štruktúru pre sidebar a hlavnú oblasť.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
        <h2>Podsekcia</h2>
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
    title: 'Layouts/LayoutWithSidebar',
    component: LayoutWithSidebar,

    argTypes: {
        className: {
            control: 'text',
            description: 'Voliteľné CSS triedy pre hlavný kontajner',
        },
        isPageLayout: {
            control: 'boolean',
            description: 'Definuje, či je layout použitý ako celostránkový.',
        },

        sidebar: { control: false },
        content: { control: false },
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
    render: (args) => (
        <LayoutWithSidebar
            {...args}
            sidebar={<DummySidebarContent />}
            content={<DummyContent />}
        />
    ),
};

export const Default: Story = {
    ...Template,
    args: {
        isPageLayout: false,
    },
};

export const PageLayout: Story = {
    ...Template,
    args: {
        isPageLayout: true,
    },
};

export const NarrowLayout: Story = {
    ...Template,
    args: {
        isPageLayout: false,
    },
};

export const WithCustomClass: Story = {
    ...Template,
    args: {
        className: 'my-custom-layout-styles',
        isPageLayout: true,
    },
};

export const MixedContentLength: Story = {
    render: (args) => (
        <LayoutWithSidebar
            {...args}
            sidebar={
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#e0ffe0',
                        borderRight: '1px solid #ccc',
                    }}
                >
                    <h4>Krátky Sidebar</h4>
                    <p>Len pár položiek.</p>
                </div>
            }
            content={
                <div
                    style={{
                        padding: '20px',
                        backgroundColor: '#fff',
                        minHeight: '150vh',
                    }}
                >
                    <h2>Veľmi dlhý obsah</h2>
                    <p>
                        Tento príbeh testuje, ako sa layout správa pri veľmi
                        dlhom obsahu v hlavnej časti. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                    {[...Array(50)].map((_, i) => (
                        <p key={i}>Riadok obsahu {i + 1}.</p>
                    ))}
                </div>
            }
        />
    ),
    args: {
        isPageLayout: true,
    },
};
