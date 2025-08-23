import { ReactNode } from 'react';
import { useBem } from '@musica-sacra/hooks';

type LabelProps = {
    children: ReactNode;
    className?: string;
};

export function Label({ children, className = '' }: LabelProps) {
    const { bem, base } = useBem('ms-label');

    return <label className={bem(base, className)}>{children}</label>;
}
