import { type NotificationType } from '../../types/types';
import { memo, useContext, useEffect, useRef } from 'react';
import { NotificationsContext } from '../../context/NotificationsContextProvider';

type NotificationProps = Omit<NotificationType, 'type'> & {
    className?: string;
};

function NotificationComponent({
    id,
    message,
    timeout,
    className,
}: NotificationProps) {
    const { removeNotification } = useContext(NotificationsContext);

    console.log('logging rerenders', id);

    console.log('logging timeout', timeout);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            removeNotification(id);
        }, timeout);

        console.log('logging timeoutref', timeoutRef.current);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleClick = () => {
        removeNotification(id);
    };

    return (
        <div className={className} onClick={handleClick}>
            {message}
        </div>
    );
}

export const Notification = memo(NotificationComponent);
