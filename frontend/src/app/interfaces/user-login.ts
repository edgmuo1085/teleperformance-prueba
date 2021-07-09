export interface UserLogin {
    username: string;
    password: string;
};

export class LoginModel implements UserLogin {

    constructor(
        public username: string,
        public password: string
    ) { }
}

