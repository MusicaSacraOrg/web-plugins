import React from 'react';

export interface LoaderProps {
    loading?: boolean;
    children?: React.ReactNode;
}

export const Loader: React.FC<LoaderProps> = ({ loading = true, children }) => {
    return (
        <div>{loading ? <div className={'ms-loader'}></div> : children}</div>
    );
};

export default Loader;
