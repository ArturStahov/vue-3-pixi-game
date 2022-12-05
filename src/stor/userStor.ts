import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
      return {
        user: {
           name: 'fffff',
           age: 12
        } as IUser | null,
      }
    },
  getters: {
    user: (state) => state.user,
  },
  })
  
  interface IUser {
    name: string
    age: number
  }