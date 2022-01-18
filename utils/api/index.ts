import axios from "axios";
import {LoginDto, RegisterUserDto, ResponseAuthUser} from "./types";

const instance = axios.create({
    baseURL: 'http://localhost:7777',
});

export const userApi = {
    async register(dto: RegisterUserDto): Promise<ResponseAuthUser> {
        const { data } = await instance.post('/auth/register', dto);
        return data;
    },
    async login(dto: LoginDto): Promise<ResponseAuthUser> {
        const { data } = await instance.post('/auth/login', dto);
        return data;
    }
}