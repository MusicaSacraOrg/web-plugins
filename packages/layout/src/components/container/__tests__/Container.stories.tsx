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
            {args.children || <DummyContentBlock />}
        </Container>
    ),
};

export const Default: Story = {
    ...Template,
    args: {
        isPageContainer: false,
        children: <DummyContentBlock text="Defaultný kontajner" />,
    },
};

export const PageContainer: Story = {
    ...Template,
    args: {
        isPageContainer: true,
        className: 'ms-container--wide',
        children: (
            <DummyContentBlock
                text="Kontajner pre celú stránku"
                backgroundColor="#e6ffe6"
                height="200px"
            />
        ),
    },
};

export const WithModifierClass: Story = {
    ...Template,
    args: {
        isPageContainer: false,
        className: 'ms-container--narrow',
        children: (
            <DummyContentBlock
                text="Kontajner s modifikačnou triedou"
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
                    amet, consectetur adipiscing elit...
                </p>
                <p>
                    Ďalší odstavec pre ilustráciu. Nulla facilisi. Sed nec velit
                    a turpis lacinia lacinia...
                </p>
            </div>
        </Container>
    ),
    args: {
        isPageContainer: false,
        className: 'ms-container--text',
    },
};
