import React from 'react';
import { useBem } from '@musica-sacra/hooks';

export type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
    isPageContainer?: boolean;
};

export function Container({
    className = '',
    children,
    isPageContainer = false,
}: ContainerProps) {
    const { bem } = useBem('ms-container');

    const classes = [bem({ 'page-container': isPageContainer }), className]
        .filter(Boolean)
        .join(' ');

    return <div className={classes}>{children}</div>;
}
