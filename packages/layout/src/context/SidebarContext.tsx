import { createContext, useContext } from 'react';

export const SidebarContext = createContext({
    closeSidebar: () => {},
});

export const useSidebar = () => useContext(SidebarContext);
