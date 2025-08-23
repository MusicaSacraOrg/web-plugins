import { useBem } from '@musica-sacra/hooks';
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export function Input({ className = '', ...props }: InputProps) {
    const { bem, base } = useBem('ms-input');

    return <input className={bem(base, className)} {...props} />;
}
