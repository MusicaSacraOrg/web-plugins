import React from 'react';
import './loader.scss';
export interface LoaderProps {
    loading?: boolean;
    color?: string;
    children?: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({
    loading = true,
    color,
    children,
}) => {
    const style: React.CSSProperties = color
        ? ({ '--color': color } as React.CSSProperties)
        : {};

    return (
        <div>
            {loading ? (
                <div className={'ms-loader'} style={style}></div>
            ) : (
                children
            )}
        </div>
    );
};

export default Loader;
