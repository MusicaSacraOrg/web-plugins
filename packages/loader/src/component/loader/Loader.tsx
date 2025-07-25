import React from 'react';
import { useBem } from '@musica-sacra/hooks';

export interface LoaderProps {
    loading?: boolean;
    children?: React.ReactNode;
}

export const Loader = ({ loading = true, children }: LoaderProps) => {
    const { bem } = useBem('ms-loader');

    return <div>{loading ? <div className={bem()}></div> : children}</div>;
};

export default Loader;
