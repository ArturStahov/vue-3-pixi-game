import { defineStore } from 'pinia';

import * as authController from '../services/auth.service';
import * as userHttp from '../services/api/user-http.service';
import { ILoginPayload, IRegistrationPayload, IUser } from '@/interface/user.interface';


export const useUserStore = defineStore('user', {
  state: (): {user: any} => ({
   user: null,
  }),

  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async login(payload: ILoginPayload) {
      try {
        const data = await userHttp.login(payload);
        authController.setToken(data.token);
        this.user = {...data};
      } catch (error) {
        console.log('ERROR>>', error);
      }
    },

    registration(payload: IRegistrationPayload) {

    },

    async logout() {
      await userHttp.logOut();
      authController.unsetToken();
    },
  },
  })
  