import { useBem } from '@musica-sacra/hooks';

type InputProps = {
    className?: string;
};

export function Input({ className = '' }: InputProps) {
    const { bem, base } = useBem('ms-input');

    return <input className={bem(base, className)} />;
}
