import { useBem } from '@musica-sacra/hooks';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
    accent?: boolean;
    rounded?: boolean;
};

export function Button({
    children,
    className = '',
    accent = false,
    rounded = false,
    ...props
}: ButtonProps) {
    const { bem, base } = useBem('ms-button');

    return (
        <button
            className={bem(base, {
                [className]: true,
                'ms-button--rounded': rounded,
                'ms-button--accent': accent,
            })}
            {...props}
        >
            {children}
        </button>
    );
}
