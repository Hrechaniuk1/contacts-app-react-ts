export type UserInfo = {
    email: string;
    name: string;
}

// export type InfoForRegister = {
//     email: string,
//     name: string,
//     password: string,
// }

export type InfoForLogin = {
    email: string,
    password: string,
}

export type InfoForRegister = InfoForLogin & {name: string}

export type RegisterLoginType = {
    token: string,
    user: UserInfo
}

export type Task = {
    id: string,
    name: string,
    number: string,
}

