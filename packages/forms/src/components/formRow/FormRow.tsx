import { useBem } from '@musica-sacra/hooks';
import { ReactNode } from 'react';

type FormRowProps = {
    children: ReactNode;
    className?: string;
};

export function FormRow({ children, className = '' }: FormRowProps) {
    const { bem, base } = useBem('ms-form-row');

    return <div className={bem(base, className)}>{children}</div>;
}
