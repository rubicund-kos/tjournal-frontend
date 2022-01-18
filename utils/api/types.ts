export type LoginDto = {
    email: string;
    password: string;
}

export type RegisterUserDto = {
    fullName: string;
    email: string;
    password: string;
}

export type ResponseAuthUser = {
    createdAt: string;
    email: string;
    fullName: string;
    id: number;
    token: string;
    updatedAt: string;
}