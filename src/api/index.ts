export * as login from './v1/login';
export * as course from './v1/course';
import axios from 'axios';

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
);
