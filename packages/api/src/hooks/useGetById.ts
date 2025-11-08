import { useContext, useEffect, useMemo } from 'react';
import {
    NotificationsContext,
    NotificationTypes,
} from '@musica-sacra/notifications';
import { useQuery } from '@tanstack/react-query';
import { BaseService } from '../service/BaseService';

export function useGetById<T>(url: string, key: string, id: string) {
    const { addNotification } = useContext(NotificationsContext);

    const baseService = useMemo(() => new BaseService<T>(), []);

    const query = useQuery({
        queryKey: [key, id],
        queryFn: async () => {
            const response = await baseService.getById(url, id);
            return response.data;
        },
    });

    useEffect(() => {
        if (query.error) {
            addNotification(query.error.message, NotificationTypes.ERROR);
        }
    }, [query.isError]);

    return { query };
}
