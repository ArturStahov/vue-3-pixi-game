export interface ILoginPayload {
    email: string,
    password: string,
}

export interface IRegistrationPayload extends ILoginPayload {
    name: string,
}

export interface IUser {
    id: string;
    name: string;
    token: string;
    avatar: string;
    email: string;
  }