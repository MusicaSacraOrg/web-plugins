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
    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded((prev) => !prev);
    };

    return (
        <div
            className={[
                'ms-layout-with-sidebar',
                isPageLayout && 'ms-layout-with-sidebar--page-layout',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <button
                className={`ms-layout-with-sidebar__sidebar-expand ${
                    isSidebarExpanded ? 'expanded' : ''
                }`}
                onClick={toggleSidebar}
                aria-expanded={isSidebarExpanded}
                aria-label={
                    isSidebarExpanded
                        ? 'Zatvoriť bočný panel'
                        : 'Otvoriť bočný panel'
                }
                type="button"
            >
                <span className="ms-layout-with-sidebar__hamburger-icon" />
            </button>

            <div
                className={`ms-layout-with-sidebar__overlay ${
                    isSidebarExpanded
                        ? 'ms-layout-with-sidebar__overlay--active'
                        : ''
                }`}
                onClick={toggleSidebar}
                aria-hidden="true"
            />

            <aside
                className={`ms-layout-with-sidebar__sidebar ${
                    isSidebarExpanded
                        ? 'ms-layout-with-sidebar__sidebar--expanded'
                        : ''
                }`}
            >
                <div className="ms-layout-with-sidebar__sidebar-inner">
                    {sidebar}
                </div>
            </aside>

            <main className="ms-layout-with-sidebar__content">
                <div className="ms-layout-with-sidebar__content-inner">
                    {content}
                </div>
            </main>
        </div>
    );
}
