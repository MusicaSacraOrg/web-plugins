import React from 'react';
import './container.css';

export type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
    maxWidth?: string;
    isPageContainer?: boolean;
};

export function Container({
    className = '',
    children,
    maxWidth,
    isPageContainer,
}: ContainerProps) {
    const style = maxWidth
        ? ({ '--max-width': maxWidth } as React.CSSProperties)
        : {};

    return (
        <div
            className={`musica-sacra-container ${isPageContainer ? 'musica-sacra-container--page-container' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
