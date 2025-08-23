import { useBem } from '@musica-sacra/hooks';
import { ReactNode } from 'react';

type ButtonProps = {
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
}: ButtonProps) {
    const { bem, base } = useBem('ms-button');

    return (
        <button
            className={bem(base, {
                [className]: true,
                'ms-button--rounded': rounded,
                'ms-button--accent': accent,
            })}
        >
            {children}
        </button>
    );
}
