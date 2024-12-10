import React, { useState, useEffect } from 'react';
import {IUser} from "../models/IUser"
import { UserService } from '../services/UserService';
import { Link } from 'react-router-dom';

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
            setState(prevState =>({
                ...prevState, 
                loading : false,
                users : response.data,
                errorMessage : ''
            }));
        }).catch(() => {
            setState(prevState =>({
                ...prevState,
                loading : false,
                errorMessage : ''
            }));
        });
    }, []);

    let {loading, users, errorMessage} = state;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold text-success">User List</p>
                        <p className="fst-italic ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, dolor eveniet temporibus officia ducimus eius numquam doloremque nihil ex magni debitis! Dignissimos atque saepe veniam quasi. Explicabo, non quia.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className='table table-hover text-center table-striped'>
                            <thead>
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 && users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>
                                                <Link to={`/contacts/${user.id}`}>{user.name}</Link>

                                                </td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>                            
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserList;