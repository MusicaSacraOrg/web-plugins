import { ReactNode } from 'react';
import { useBem } from '@musica-sacra/hooks';

type KingProps = {
    className?: string;
    isPageLayout?: boolean;
    children: React.ReactNode;
    leftSidebar: ReactNode;
    rightSidebar: ReactNode;
};

export function King({
    className = '',
    isPageLayout = false,
    children,
    leftSidebar,
    rightSidebar,
}: KingProps) {
    const { bem, base } = useBem('ms-king');

    return (
        <div
            className={bem(base, {
                [className]: true,
                'ms-king--page-layout': isPageLayout,
            })}
        >
            <div className={bem('left-sidebar')}>{leftSidebar}</div>
            <div className={bem('content')}>{children}</div>
            <div className={bem('right-sidebar')}>{rightSidebar}</div>
        </div>
    );
}
