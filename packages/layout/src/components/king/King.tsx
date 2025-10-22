import { ReactNode, useState } from 'react';
import { useBem } from '@musica-sacra/hooks';
import { SidebarExpandButton } from '../sidebarExpandButton/SidebarExpandButton';
import { Overlay } from '../overlay/Overlay';
import { SidebarContext } from '../../context/SidebarContext';

type KingProps = {
    className?: string;
    isPageLayout?: boolean;
    children: React.ReactNode;
    leftSidebar: ReactNode;
    rightSidebar: ReactNode;
    mergeSidebarsWhenResponsive?: boolean;
};

export function King({
    className = '',
    isPageLayout = false,
    children,
    leftSidebar,
    rightSidebar,
    mergeSidebarsWhenResponsive = false,
}: KingProps) {
    const { bem, base } = useBem('ms-king');

    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded((prev) => !prev);
    };

    const closeSidebar = () => setSidebarExpanded(false);

    return (
        <div
            className={bem(base, {
                [className]: true,
                'ms-king--page-layout': isPageLayout,
                'ms-king--merge-sidebars': mergeSidebarsWhenResponsive,
            })}
        >
            <SidebarExpandButton onClickCallback={toggleSidebar} />
            <Overlay
                shouldBeVisible={isSidebarExpanded}
                onClickCallback={toggleSidebar}
            />

            <div
                className={bem({
                    sidebar: true,
                    'sidebar--left': true,
                    'sidebar--expanded': isSidebarExpanded,
                })}
            >
                <div className={bem('sidebar-close-button')}>
                    <button
                        onClick={toggleSidebar}
                        aria-label="Zatvoriť sidebar"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            fill="currentColor"
                        >
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>

                <SidebarContext.Provider value={{ closeSidebar }}>
                    <div className={bem('sidebar-content')}>
                        {leftSidebar}
                        {mergeSidebarsWhenResponsive && (
                            <div className={bem('sidebar--merged')}>
                                <div className={bem('hr')} />
                                {rightSidebar}
                            </div>
                        )}
                    </div>
                </SidebarContext.Provider>
            </div>

            <div className={bem('content')}>
                <div className={bem('content-inner')}>{children}</div>
            </div>

            <div className={bem({ sidebar: true, 'sidebar--right': true })}>
                <div className={bem('sidebar-content')}>{rightSidebar}</div>
            </div>
        </div>
    );
}
