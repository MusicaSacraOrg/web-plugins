import React from 'react';
import { Container } from '../container/Container';
import './layoutWithTwoSidebars.scss';

type TwoSidebarLayoutProps = {
    leftSidebar: React.ReactNode;
    rightSidebar: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    isPageLayout?: boolean;
};

export const TwoSidebarLayout: React.FC<TwoSidebarLayoutProps> = ({
    leftSidebar,
    rightSidebar,
    children,
    className = '',
    isPageLayout = true,
}) => {
    return (
        <Container
            isPageContainer={isPageLayout}
            className={`ms-two-sidebar-layout-wrapper ${className}`}
        >
            <div className="ms-two-sidebar-layout">
                <aside className="ms-two-sidebar-layout__sidebar ms-two-sidebar-layout__sidebar--left">
                    {leftSidebar}
                </aside>

                <main className="ms-two-sidebar-layout__main">{children}</main>

                <aside className="ms-two-sidebar-layout__sidebar ms-two-sidebar-layout__sidebar--right">
                    {rightSidebar}
                </aside>
            </div>
        </Container>
    );
};
