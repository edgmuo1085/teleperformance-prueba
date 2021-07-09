import { UserInfo } from "./";

export interface TokenInfo {
    iat: number,
    exp: number,
    user: UserInfo,
}

export class TokenInfoModel implements TokenInfo {

    static llenarData(user: TokenInfo) {
        return new TokenInfoModel(
            user.iat,
            user.exp,
            user.user
        )
    }

    constructor(
        public exp: number,
        public iat: number,
        public user: UserInfo,
    ) { }
}