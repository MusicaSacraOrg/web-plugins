import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../Container';

const DummyContentBlock: React.FC<{
    height?: string;
    backgroundColor?: string;
    text?: string;
}> = ({
    height = '100px',
    backgroundColor = '#aaddff',
    text = 'Obsah kontajnera',
}) => (
    <div
        style={{
            height,
            backgroundColor,
            padding: '20px',
            border: '1px dashed #555',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
            fontSize: '1.2em',
            borderRadius: '5px',
        }}
    >
        {text}
    </div>
);

const meta: Meta<typeof Container> = {
    title: 'Layouts/Container',
    component: Container,
    argTypes: {
        className: {
            control: 'text',
            description: 'Voliteľné CSS triedy pre hlavný kontajner.',
        },
        maxWidth: {
            control: 'text',
            description: 'Maximálna šírka kontajnera (napr. "800px", "75%").',
        },
        isPageContainer: {
            control: 'boolean',
            description:
                'Definuje, či je kontajner použitý ako hlavný kontajner stránky.',
        },
        children: { control: false },
    },
    parameters: {
        layout: 'padded',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
    render: (args) => (
        <Container {...args}>
            {}
            {args.children || <DummyContentBlock />} {}
        </Container>
    ),
};

export const Default: Story = {
    ...Template,
    args: {
        maxWidth: '800px',
        isPageContainer: false,
        children: (
            <DummyContentBlock text="Defaultný kontajner (max. šírka 800px)" />
        ),
    },
};

export const PageContainer: Story = {
    ...Template,
    args: {
        isPageContainer: true,
        maxWidth: '100%',
        children: (
            <DummyContentBlock
                text="Kontajner pre celú stránku"
                backgroundColor="#e6ffe6"
                height="200px"
            />
        ),
    },
};

export const WithCustomMaxWidth: Story = {
    ...Template,
    args: {
        maxWidth: '500px',
        isPageContainer: false,
        children: (
            <DummyContentBlock
                text="Kontajner s maximálnou šírkou 500px"
                backgroundColor="#ffe6e6"
            />
        ),
    },
};

export const WithMultipleChildren: Story = {
    render: (args) => (
        <Container {...args}>
            <DummyContentBlock
                text="Prvý blok"
                height="80px"
                backgroundColor="#cce0ff"
            />
            <DummyContentBlock
                text="Druhý blok"
                height="120px"
                backgroundColor="#ffd9b3"
            />
            <div
                style={{
                    padding: '15px',
                    backgroundColor: '#e0ffe0',
                    border: '1px solid #99cc99',
                    marginTop: '10px',
                }}
            >
                <p>Toto je vlastný HTML element s textom.</p>
                <button
                    style={{
                        padding: '8px 15px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                >
                    Tlačidlo
                </button>
            </div>
        </Container>
    ),
    args: {
        maxWidth: '900px',
        isPageContainer: false,
    },
};

export const WithLongTextContent: Story = {
    render: (args) => (
        <Container {...args}>
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                <h2>Titulok obsahu</h2>
                <p>
                    Toto je dlhý odstavec textu, aby sme vizuálne preverili, ako
                    sa text zalamuje a vyplňuje kontajner. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <p>
                    Ďalší odstavec pre ilustráciu. Nulla facilisi. Sed nec velit
                    a turpis lacinia lacinia. Maecenas tristique orci ac sem
                    efficitur, at fermentum ex venenatis.
                </p>
            </div>
        </Container>
    ),
    args: {
        maxWidth: '700px',
        isPageContainer: false,
    },
};
