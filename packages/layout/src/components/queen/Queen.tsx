import { ReactNode, useState } from 'react';
import { useBem } from '@musica-sacra/hooks';
import { SidebarContext } from '../../context/SidebarContext';
import { Overlay } from '../overlay/Overlay';
import { SidebarExpandButton } from '../sidebarExpandButton/SidebarExpandButton';

type QueenProps = {
    className?: string;
    sidebar: ReactNode;
    children: ReactNode;
    isPageLayout?: boolean;
    fullWidth?: boolean;
};

export function Queen({
    className = '',
    sidebar,
    children,
    isPageLayout = false,
    fullWidth = false,
}: QueenProps) {
    const { bem, base } = useBem('ms-queen');

    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded((prev) => !prev);
    };

    const closeSidebar = () => setSidebarExpanded(false);

    return (
        <div
            className={bem(base, {
                [className]: true,
                'ms-queen--page-layout': isPageLayout,
                'ms-queen--full-width': fullWidth,
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
                    <div className={bem('sidebar-content')}>{sidebar}</div>
                </SidebarContext.Provider>
            </div>

            <div className={bem('content')}>
                <div className={bem('content-inner')}>{children}</div>
            </div>
        </div>
    );
}
