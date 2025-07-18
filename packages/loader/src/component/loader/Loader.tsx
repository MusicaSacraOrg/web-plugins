import React from 'react';

export interface LoaderProps {
    loading?: boolean;
    children?: React.ReactNode;
}

export const Loader = ({ loading = true, children }: LoaderProps) => {
    return (
        <div>{loading ? <div className={'ms-loader'}></div> : children}</div>
    );
};

export default Loader;
