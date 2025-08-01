import { createContext, useState, ReactNode, useCallback } from 'react';
import { Notifications } from '../component/notificationsWrapper/Notifications';
import { v4 as uuid } from 'uuid';
import {
    type NotificationType,
    type NotificationTypeType,
    NotificationTypes,
} from '../types/types';

type NotificationsContextType = {
    notifications: NotificationType[];
    addNotification: (
        message: string,
        type?: NotificationTypeType,
        timeout?: number
    ) => string;
    removeNotification: (id: string) => void;
};

type NotificationsContextProviderProps = {
    children: ReactNode;
};

const defaultContextValue: NotificationsContextType = {
    notifications: [],
    addNotification: () => '',
    removeNotification: () => {},
};

export const NotificationsContext =
    createContext<NotificationsContextType>(defaultContextValue);

export function NotificationsContextProvider({
    children,
}: NotificationsContextProviderProps) {
    const [notifications, setNotifications] = useState<NotificationType[]>([]);

    const addNotification = useCallback(
        (
            message: string = 'Hello there... General KENOBII!',
            type: NotificationTypeType = NotificationTypes.INFO,
            timeout: number = 5000
        ) => {
            const id: string = uuid();
            setNotifications((prevNotifications: NotificationType[]) => [
                ...prevNotifications,
                { type, message, timeout, id },
            ]);

            return id;
        },
        []
    );

    const removeNotification = useCallback((id: string) => {
        setNotifications((prevNotifications: NotificationType[]) =>
            prevNotifications.filter(
                (notification: NotificationType) => notification.id !== id
            )
        );
    }, []);

    return (
        <NotificationsContext.Provider
            value={{ notifications, addNotification, removeNotification }}
        >
            <Notifications notifications={notifications} />
            {children}
        </NotificationsContext.Provider>
    );
}
