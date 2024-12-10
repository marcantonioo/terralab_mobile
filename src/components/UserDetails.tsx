import React from 'react';
import {useParams} from 'react-router-dom'
import UserList from './UserList';
import { IUser } from '../models/IUser';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserService } from '../services/UserService';

interface URLParams{
    id : string;
}
interface IState {
    loading : boolean;
    user : IUser;
    errorMessage : string;
}
interface IProps{}

let UserDetails:React.FC<IProps> = () => {
    let {id} = useParams<Record<string, string | undefined>>();

    let [state, setState] = useState<IState>({
        loading : false,
        user : {} as IUser,
        errorMessage : ''
    });

    useEffect(()=>{
        if(id){
            UserService.getAllUsers().then((response) => {
                console.log(response.data);
            }).catch();
        }

    });

    return (
        <React.Fragment>
            <h3>UserDetails</h3>
            <h1>{id}</h1>
        </React.Fragment>
    )
}
export default UserDetails;