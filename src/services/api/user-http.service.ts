import { ILoginPayload, IRegistrationPayload, IUser } from '@/interface/user.interface';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export const login = (payload: ILoginPayload):Promise<IUser> => {
    return axios.post('/api/users/login',  payload)
    .then((response) => response.data.data)
    .catch(errorHandler);
};

export const registration = (payload: IRegistrationPayload):Promise<any> => {
    return axios.post('/api/users/registration', payload)
    .then((response) => response.data.data)
    .catch(errorHandler);
};

export const logOut = ():Promise<any> => {
    return axios.post('/api/users/logout')
    .then((response) => response.data.data)
    .catch(errorHandler);
};

function errorHandler(error: Error) {
    throw new Error(error.message);
}