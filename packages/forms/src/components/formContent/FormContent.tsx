import { ReactNode } from 'react';
import { useBem } from '@musica-sacra/hooks';

type FormContentProps = {
    children: ReactNode;
    className?: string;
};

export function FormContent({ children, className = '' }: FormContentProps) {
    const { bem, base } = useBem('ms-form-content');

    return <div className={bem(base, className)}>{children}</div>;
}
