import React from 'react';
import { useBem } from '@musica-sacra/hooks';

export type ContainerProps = {
    classname?: string;
    children?: React.ReactNode;
    isPageContainer?: boolean;
};

export function Container({
    classname = '',
    children,
    isPageContainer = false,
}: ContainerProps) {
    const { bem, base } = useBem('ms-container');

    return (
        <div
            className={bem(base, {
                [classname]: true,
                'ms-container--page-container': isPageContainer,
            })}
        >
            {children}
        </div>
    );
}
