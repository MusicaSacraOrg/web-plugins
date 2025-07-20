import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TwoSidebarLayout } from '../LayoutWithTwoSidebars';
import '../layoutWithTwoSidebars.scss';

type TwoSidebarLayoutProps = React.ComponentProps<typeof TwoSidebarLayout>;

const SidebarBlock = ({ label }: { label: string }) => (
    <div
        style={{
            padding: '20px',
            backgroundColor: '#e6f7ff',
            border: '1px solid #91d5ff',
            minHeight: '100vh',
        }}
    >
        <h3>{label} Sidebar</h3>
        <ul>
            <li>
                <a href="#1">Položka 1</a>
            </li>
            <li>
                <a href="#2">Položka 2</a>
            </li>
            <li>
                <a href="#3">Položka 3</a>
            </li>
        </ul>
    </div>
);

const MainBlock = () => (
    <div
        style={{
            padding: '20px',
            backgroundColor: '#fff',
            minHeight: '100vh',
        }}
    >
        <h1>Hlavný obsah</h1>
        <p>Toto je hlavná obsahová sekcia layoutu.</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
    </div>
);

const meta: Meta<typeof TwoSidebarLayout> = {
    title: 'Layouts/TwoSidebarLayout',
    component: TwoSidebarLayout,
    argTypes: {
        className: {
            control: 'text',
            description: 'Voliteľná CSS trieda pre obal',
        },
        isPageLayout: {
            control: 'boolean',
            description:
                'Zarovná layout na celú výšku stránky (min-height: 100vh)',
        },
        leftSidebar: { control: false },
        rightSidebar: { control: false },
        children: { control: false },
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof TwoSidebarLayout>;

const Template = (
    args: Omit<
        TwoSidebarLayoutProps,
        'leftSidebar' | 'rightSidebar' | 'children'
    >
) => (
    <TwoSidebarLayout
        {...args}
        isPageLayout={args.isPageLayout}
        className={args.className}
        leftSidebar={<SidebarBlock label="Ľavý" />}
        rightSidebar={<SidebarBlock label="Pravý" />}
    >
        <MainBlock />
    </TwoSidebarLayout>
);

export const Default: Story = {
    render: Template,
    args: {
        isPageLayout: false,
        className: '',
    },
};

export const PageLayout: Story = {
    render: Template,
    args: {
        isPageLayout: true,
        className: '',
    },
};

export const Narrow: Story = {
    render: Template,
    args: {
        isPageLayout: false,
        className: '',
    },
};

export const WithoutRightSidebar: Story = {
    render: (args) => (
        <TwoSidebarLayout
            {...args}
            isPageLayout={args.isPageLayout}
            className={args.className}
            leftSidebar={<SidebarBlock label="Ľavý" />}
            rightSidebar={null}
        >
            <MainBlock />
        </TwoSidebarLayout>
    ),
    args: {
        isPageLayout: false,
        className: '',
    },
};

export const LongContent: Story = {
    render: (args) => (
        <TwoSidebarLayout
            {...args}
            isPageLayout={args.isPageLayout}
            className={args.className}
            leftSidebar={<SidebarBlock label="Ľavý" />}
            rightSidebar={<SidebarBlock label="Pravý" />}
        >
            <div
                style={{
                    padding: '20px',
                    backgroundColor: '#fff',
                    minHeight: '200vh',
                }}
            >
                <h1>Dlhý obsah</h1>
                {[...Array(60)].map((_, i) => (
                    <p key={i}>Toto je riadok číslo {i + 1}</p>
                ))}
            </div>
        </TwoSidebarLayout>
    ),
    args: {
        isPageLayout: true,
        className: '',
    },
};
