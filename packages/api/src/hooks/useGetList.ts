import { useContext, useEffect, useMemo } from 'react';
import {
    NotificationsContext,
    NotificationTypes,
} from '@musica-sacra/notifications';
import { useQuery } from '@tanstack/react-query';
import { BaseService } from '../service/BaseService';

export function useGetList<T = any>(
    url: string,
    key: string,
    params?: Record<string, string>
) {
    const { addNotification } = useContext(NotificationsContext);

    const baseService = useMemo(() => new BaseService<T>(), []);

    const query = useQuery({
        queryKey: [key, params],
        queryFn: async () => {
            const response = await baseService.getList(url, params);
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
