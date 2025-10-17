import { useBem } from '@musica-sacra/hooks';

type OverlayProps = {
    shouldBeVisible: boolean;
    onClickCallback?: () => void;
};

export function Overlay({ shouldBeVisible, onClickCallback }: OverlayProps) {
    const { bem, base } = useBem('ms-overlay');

    return (
        <div
            className={bem(base, {
                'ms-overlay--visible': shouldBeVisible,
            })}
            onClick={onClickCallback}
        />
    );
}
