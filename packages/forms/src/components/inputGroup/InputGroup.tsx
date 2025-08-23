import { useBem } from '@musica-sacra/hooks';
import { ReactNode } from 'react';

type InputGroupProps = {
    children: ReactNode;
    className?: string;
};

export function InputGroup({ children, className = '' }: InputGroupProps) {
    const { bem, base } = useBem('ms-input-group');

    return <div className={bem(base, className)}>{children}</div>;
}
