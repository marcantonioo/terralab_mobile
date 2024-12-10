import React, { useState } from 'react';
import {IUser} from "../models/IUser"
import { UserService } from '../services/UserService';
import { useEffect } from 'react';

interface IState {
    loading : boolean;
    users : IUser[];
    errorMessage : string;
}
interface IProps{}

let UserList:React.FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        loading : false,
        users : [] as IUser[],
        errorMessage : ''
    });

    useEffect(() => {
        setState({...state, loading : true});
        UserService.getAllUsers().then((response) => {
            setState({
                ...state, 
                loading : false,
                users : response.data
            })
        }).catch(() => {
            
        });
    }, );

    return (
        <React.Fragment>
            <h3>UserList</h3>
        </React.Fragment>
    )
}
export default UserList;