import { LabelHTMLAttributes, ReactNode } from 'react';
import { useBem } from '@musica-sacra/hooks';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
    className?: string;
};

export function Label({ children, className = '', ...props }: LabelProps) {
    const { bem, base } = useBem('ms-label');

    return (
        <label className={bem(base, className)} {...props}>
            {children}
        </label>
    );
}
