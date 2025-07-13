import './layoutWithSidebar.css';
import { CSSProperties, ReactNode, useState } from 'react';

type LayoutWithSidebarProps = {
    className?: string;
    sidebar: ReactNode;
    content: ReactNode;
    maxWidth?: string;
    isPageLayout?: boolean;
};

export function LayoutWithSidebar({
    className = '',
    sidebar,
    content,
    maxWidth,
    isPageLayout = false,
}: LayoutWithSidebarProps) {
    const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

    const style: CSSProperties = maxWidth
        ? ({ '--max-width': maxWidth } as CSSProperties)
        : {};

    const toggleSidebar = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div
            className={`musica-sacra-layout-with-sidebar ${isPageLayout ? 'musica-sacra-layout-with-sidebar--page-layout' : ''} ${className}`}
            style={style}
        >
            <div className={'musica-sacra-layout-with-sidebar__sidebar-expand'}>
                <a onClick={toggleSidebar}>{'>>'}</a>
            </div>
            {isSidebarExpanded && (
                <div
                    className={`musica-sacra-layout-with-sidebar__overlay ${isSidebarExpanded ? 'musica-sacra-layout-with-sidebar__overlay--active' : ''}`}
                    onClick={toggleSidebar}
                />
            )}

            <div
                className={`musica-sacra-layout-with-sidebar__sidebar ${isSidebarExpanded ? 'musica-sacra-layout-with-sidebar__sidebar--expanded' : ''}`}
            >
                <div
                    className={`musica-sacra-layout-with-sidebar__sidebar-inner`}
                >
                    {sidebar}
                </div>
            </div>
            <div className={'musica-sacra-layout-with-sidebar__content'}>
                <div
                    className={`musica-sacra-layout-with-sidebar__content-inner`}
                >
                    {content}
                </div>
            </div>
        </div>
    );
}
