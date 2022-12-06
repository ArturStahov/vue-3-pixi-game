import { authAction, IFormPayload, IValueAuthPayload } from '@/interface/auth-form.interface';
import { IUser } from '@/interface/user.interface';
import axios from 'axios';
import { useUserStore } from '../stor/userStor';


export const setToken = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const unsetToken = () => {
    axios.defaults.headers.common.Authorization = '';
}

export function authService(payload: IFormPayload) {
    const flow = {
        [authAction.LOGIN]: loginFlow,
        [authAction.SIGN_IN]: registrationFlow
    }

    return flow[payload.action](payload.value);
}

export async function logoutAction() {
    try {
        const userStor = useUserStore();
        const data = await userStor.logout();
        console.log('DATA', data);
        unsetToken();
    } catch (error) {
         console.log('>>>>ERRR',error);
    }
}

async function loginFlow(payload: IValueAuthPayload) {
    try {
        const userStor = useUserStore();
        const data = await userStor.login(payload);
        const token = (data as IUser).token;
        setToken(token);
    } catch (error) {
         console.log('>>>>ERRR',error);
    }
}

async function registrationFlow(payload: IValueAuthPayload) {
    try {const userStor = useUserStore();
        const data = await userStor.registration(payload);
        console.log('DATA', data)
    } catch (error) {
        console.log('>>>>ERRR',error);
    }
}

export default {
    setToken,
    unsetToken,
    authService,
    logoutAction,
}