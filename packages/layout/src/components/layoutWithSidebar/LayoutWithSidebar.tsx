import './layoutWithSidebar.scss';
import { ReactNode, useState } from 'react';

type LayoutWithSidebarProps = {
    className?: string;
    sidebar: ReactNode;
    content: ReactNode;
    isPageLayout?: boolean;
};

export function LayoutWithSidebar({
    className = '',
    sidebar,
    content,
    isPageLayout = false,
}: LayoutWithSidebarProps) {
    const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div
            className={`ms-layout-with-sidebar ${isPageLayout ? 'ms-layout-with-sidebar--page-layout' : ''} ${className}`}
        >
            <div className="ms-layout-with-sidebar__sidebar-expand">
                <a onClick={toggleSidebar}>{'>>'}</a>
            </div>

            {isSidebarExpanded && (
                <div
                    className="ms-layout-with-sidebar__overlay ms-layout-with-sidebar__overlay--active"
                    onClick={toggleSidebar}
                />
            )}

            <div
                className={`ms-layout-with-sidebar__sidebar ${isSidebarExpanded ? 'ms-layout-with-sidebar__sidebar--expanded' : ''}`}
            >
                <div className="ms-layout-with-sidebar__sidebar-inner">
                    {sidebar}
                </div>
            </div>

            <div className="ms-layout-with-sidebar__content">
                <div className="ms-layout-with-sidebar__content-inner">
                    {content}
                </div>
            </div>
        </div>
    );
}
