import { useBem } from '@musica-sacra/hooks';
import { ReactNode } from 'react';

type FormGroupProps = {
    children: ReactNode;
    className?: string;
};

export function FormGroup({ children, className = '' }: FormGroupProps) {
    const { bem, base } = useBem('ms-form-group');

    return <div className={bem(base, className)}>{children}</div>;
}
