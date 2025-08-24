import { Container } from '../container/Container';
import React from 'react';
import { useBem } from '@musica-sacra/hooks';

type LayoutBasicProps = {
    children?: React.ReactNode;
    className?: string;
    isPageLayout?: boolean;
};

export function LayoutBasic({
    children,
    className = '',
    isPageLayout = false,
}: LayoutBasicProps) {
    const { bem, base } = useBem('ms-layout-basic');

    return (
        <div className={bem(base, className)}>
            <Container isPageContainer={isPageLayout}>{children}</Container>
        </div>
    );
}
