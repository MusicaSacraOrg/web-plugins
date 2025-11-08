import { AbstractService } from './AbstractService';
import axios from 'axios';

export class BaseService<T = any> extends AbstractService {
    async getList(url: string, params?: Record<string, any>) {
        return await axios.get<T[]>(url, { params, ...this.getHeaders() });
    }

    async getById(url: string, id: string) {
        return await axios.get<T>(`${url}/${id}`, { ...this.getHeaders() });
    }
}
