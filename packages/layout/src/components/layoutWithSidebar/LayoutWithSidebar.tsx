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
    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const style: CSSProperties = maxWidth
        ? ({ '--max-width': maxWidth } as CSSProperties)
        : {};

    const toggleSidebar = () => {
        setSidebarExpanded((prev) => !prev);
    };

    return (
        <div
            className={`ms-layout-with-sidebar ${
                isPageLayout ? 'ms-layout-with-sidebar--page-layout' : ''
            } ${className}`}
            style={style}
        >
            <button
                type="button"
                className="ms-layout-with-sidebar__sidebar-expand"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
                aria-pressed={isSidebarExpanded}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        background: 'transparent',
                        position: 'absolute',
                        left: '0.5rem',
                        padding: '0.25rem 0.5rem',
                        top: '0.3rem',
                    }}
                >
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </button>

            {isSidebarExpanded && (
                <div
                    className="ms-layout-with-sidebar__overlay ms-layout-with-sidebar__overlay--active"
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`ms-layout-with-sidebar__sidebar ${
                    isSidebarExpanded
                        ? 'ms-layout-with-sidebar__sidebar--expanded'
                        : ''
                }`}
            >
                {isSidebarExpanded && (
                    <button
                        className="ms-layout-with-sidebar__sidebar-close"
                        onClick={toggleSidebar}
                        aria-label="Close sidebar"
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
                )}

                {sidebar}
            </aside>

            <main className="ms-layout-with-sidebar__content">
                <div className="ms-layout-with-sidebar__content-inner">
                    {content}
                </div>
            </main>
        </div>
    );
}
