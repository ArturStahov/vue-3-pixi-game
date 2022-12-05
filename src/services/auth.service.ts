import axios from 'axios';

export const setToken = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const unsetToken = () => {
    axios.defaults.headers.common.Authorization = '';
}

export default {
    setToken,
    unsetToken,
}