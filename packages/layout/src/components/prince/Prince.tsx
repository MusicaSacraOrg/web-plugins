import { Container } from '../container/Container';
import React, { ReactNode } from 'react';
import { useBem } from '@musica-sacra/hooks';

type PrinceProps = {
    children?: ReactNode;
    className?: string;
    isPageLayout?: boolean;
};

export function Prince({
    children,
    className = '',
    isPageLayout = false,
}: PrinceProps) {
    const { bem, base } = useBem('ms-prince');

    return (
        <div className={bem(base, className)}>
            <Container isPageContainer={isPageLayout}>{children}</Container>
        </div>
    );
}
