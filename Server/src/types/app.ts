export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}
