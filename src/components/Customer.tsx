import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps{
    name : string;
    age : number;
    title : string;
}

let Customer: React.FC<IProps> = ({name, age, title}) => {
    return(
        <React.Fragment>
            <h2>Customer Component</h2>
            <ul className='list-group'>
                <li>
                    Name : {name}
                </li>
                <li>
                    Age : {age}
                </li>
                <li>
                    Title : {title}
                </li>
            </ul>
        </React.Fragment>
    )
};
export default Customer;