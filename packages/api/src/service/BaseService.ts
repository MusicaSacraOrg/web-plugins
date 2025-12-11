import { AbstractService } from './AbstractService';
import axios from 'axios';

type WithItems<T, R = Record<string, any>> = { items: T[] } & R;

export class BaseService<
    T = any,
    R = Record<string, any>,
> extends AbstractService {
    async getList(url: string, params?: Record<string, string>) {
        return await axios.get<WithItems<T, R>>(url, {
            params,
            ...this.getHeaders(),
        });
    }

    async getById(url: string, id: string) {
        return await axios.get<T>(`${url}/${id}`, { ...this.getHeaders() });
    }
}
