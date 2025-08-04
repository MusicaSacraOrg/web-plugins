import { Container } from '../container/Container';
import React from 'react';
import { useBem } from '@musica-sacra/hooks';

type LayoutBasicProps = {
    children?: React.ReactNode;
    classname?: string;
    isPageLayout?: boolean;
};

export function LayoutBasic({
    children,
    classname = '',
    isPageLayout = false,
}: LayoutBasicProps) {
    const { bem, base } = useBem('ms-layout-basic');

    return (
        <div className={bem(base, classname)}>
            <Container isPageContainer={isPageLayout}>{children}</Container>
        </div>
    );
}
