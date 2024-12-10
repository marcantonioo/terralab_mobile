import axios from 'axios';
import { IUser } from '../models/IUser';

export class UserService {
    private static serverURL: string = 'https://jsonplaceholder.typicode.com';

    // Método para buscar todos os usuários
    public static getAllUsers() {
        let dataURL: string = `${this.serverURL}/users`;
        return axios.get<IUser[]>(dataURL);
    }

    // Método para buscar um usuário específico pelo ID
    public static getUser(id: string) {
        let dataURL: string = `${this.serverURL}/users/${id}`;
        return axios.get<IUser>(dataURL);
    }
}