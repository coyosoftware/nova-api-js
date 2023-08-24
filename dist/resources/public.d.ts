import { AxiosResponse } from 'axios';
export default class Public {
    signIn(email: string, password: string): Promise<AxiosResponse>;
}
