import { Container } from '../../components/container/Container';
import React from 'react';
import './layoutBasic.css';

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
    return (
        <div
            className={`musica-sacra-layout-basic ${isPageLayout ? 'musica-sacra-layout-basic--page-layout' : ''} ${className} `}
        >
            <Container
                maxWidth={
                    size === 'small'
                        ? '800px'
                        : size === 'medium'
                          ? '1000px'
                          : '1200px'
                }
            >
                {children}
            </Container>
        </div>
    );
}
