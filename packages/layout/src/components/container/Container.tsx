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
    const { bem, base } = useBem('ms-container');

    return (
        <div
            className={bem(base, {
                [className]: true,
                'ms-container--page-container': isPageContainer,
            })}
        >
            {children}
        </div>
    );
}
