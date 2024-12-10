import React from 'react';

interface IState{}
interface IProps{
    name : string;
    age : number;
    title: string
}
export class CustomerClass extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }
    render() {
        let {name, age, title} = this.props;
        return (
            <React.Fragment>
                <h2>Customer Class Component</h2>
                <ul>
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
};