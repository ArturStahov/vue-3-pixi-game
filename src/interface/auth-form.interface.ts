export enum authAction {
    LOGIN = 'login',
    SIGN_IN = 'sign-in',
}

export type formAction = authAction.LOGIN | authAction.SIGN_IN

export interface IFormPayload {
  action: formAction,
  value: {
    email: string,
    name?: string,
    password: string,
  }
}