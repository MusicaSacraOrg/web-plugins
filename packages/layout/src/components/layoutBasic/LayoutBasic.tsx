import { Container } from '../container/Container';
import React from 'react';
import './layoutBasic.scss';

type LayoutBasicProps = {
    children?: React.ReactNode;
    className?: string;
    isPageLayout?: boolean;
    size?: 'small' | 'medium' | 'large';
};

export function LayoutBasic({
    children,
    className = '',
    isPageLayout = false,
    size = 'large',
}: LayoutBasicProps) {
    const sizeClass = `ms-container--${size}`;
    const layoutClass = isPageLayout ? 'ms-layout-basic--page-layout' : '';

    return (
        <div className={`ms-layout-basic ${layoutClass} ${className}`}>
            <Container className={sizeClass}>{children}</Container>
        </div>
    );
}
