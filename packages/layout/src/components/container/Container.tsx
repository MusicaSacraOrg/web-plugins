import React from 'react';

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
    return (
        <div
            className={`ms-container ${isPageContainer ? 'ms-container--page-container' : ''} ${className}`}
        >
            {children}
        </div>
    );
}
