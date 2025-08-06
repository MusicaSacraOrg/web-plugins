import { ReactNode, useState } from 'react';
import { useBem } from '@musica-sacra/hooks';
import { SidebarContext } from '../../context/SidebarContext';

type LayoutWithSidebarProps = {
    className?: string;
    sidebar: ReactNode;
    children: ReactNode;
    isPageLayout?: boolean;
};

export function LayoutWithSidebar({
    className = '',
    sidebar,
    children,
    isPageLayout = false,
}: LayoutWithSidebarProps) {
    const { bem, base } = useBem('ms-layout-with-sidebar');

    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded((prev) => !prev);
    };

    const closeSidebar = () => setSidebarExpanded(false);

    return (
        <div
            className={bem(base, {
                [className]: true,
                'ms-layout-with-sidebar--page-layout': isPageLayout,
            })}
        >
            <div className={bem('sidebar-expand')}>
                <button
                    onClick={toggleSidebar}
                    aria-label="Sidebar"
                    aria-pressed={isSidebarExpanded}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="currentColor"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path d="M5.7,6.71L5.7,6.71c-0.39,0.39-0.39,1.02,0,1.41L9.58,12L5.7,15.88c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41L7.12,6.71C6.73,6.32,6.09,6.32,5.7,6.71z" />
                                <path d="M12.29,6.71L12.29,6.71c-0.39,0.39-0.39,1.02,0,1.41L16.17,12l-3.88,3.88c-0.39,0.39-0.39,1.02,0,1.41l0,0 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59C13.32,6.32,12.68,6.32,12.29,6.71z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            {isSidebarExpanded && (
                <div
                    className={bem({
                        overlay: true,
                        'overlay--active': isSidebarExpanded,
                    })}
                    onClick={toggleSidebar}
                />
            )}

            <aside
                className={bem({
                    sidebar: true,
                    'sidebar--expanded': isSidebarExpanded,
                })}
            >
                {isSidebarExpanded && (
                    <div className={bem('sidebar-close')}>
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
                )}

                <SidebarContext.Provider value={{ closeSidebar }}>
                    <div className={bem('sidebar-content')}>{sidebar}</div>
                </SidebarContext.Provider>
            </aside>

            <main className={bem('content')}>
                <div className={bem('content-inner')}>{children}</div>
            </main>
        </div>
    );
}
