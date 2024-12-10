import React from 'react';

interface IProps{}
interface IState{
    name : string;
    age : number;
    title : string;
}

export class EmployeeClass extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            name : 'uede',
            age : 19,
            title : 'mindingo'
        } as IState
    }
    render() {
        let {name, age, title} = this.state;
        return (
            <React.Fragment>
                <h3>Employee Class Component</h3>
                <ul className='list-group'>
                <li className='list-group-item'>
                    Name : {name}
                </li>
                <li className='list-group-item'>
                    Name : {age}
                </li>
                <li className='list-group-item'>
                    Name : {title}
                </li>
                </ul>
            </React.Fragment>
        );
    }
}