import { Token } from "./token";

export interface User {
    firstName?: string;
    lastName?: string;
    username?: string;
    phone?: string;
    password?: string;
    token?: Token;
    email?: string;
}
