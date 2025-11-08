export class AbstractService {
    getUserToken() {
        return localStorage.getItem('token') || '';
    }

    getHeaders() {
        return {
            headers: {
                Authorization: `Bearer ${this.getUserToken()}`,
            },
        };
    }

    getHeadersWithFile = () => {
        return {
            headers: {
                Authorization: `Bearer ${this.getUserToken()}`,
                'Content-Type': 'multipart/form-data',
            },
        };
    };
}
