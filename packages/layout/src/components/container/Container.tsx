import React from 'react';
import { useClassNames } from '@musica-sacra/hooks';

export type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
    isPageContainer?: boolean;
};

export function Container({
    className = '',
    children,
    isPageContainer,
}: ContainerProps) {
    const cx = useClassNames();

    return (
        <div
            className={cx(
                'ms-container',
                isPageContainer && 'ms-container--page-container',
                className
            )}
        >
            {children}
        </div>
    );
}
