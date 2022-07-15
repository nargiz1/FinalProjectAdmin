
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:39524',
});

Axios.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

export default Axios;