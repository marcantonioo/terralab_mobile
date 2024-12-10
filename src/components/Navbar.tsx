import React from 'react';
import { Link } from 'react-router-dom';

interface IState {}
interface IProps{}

let Navbar:React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div>
                    <Link to={'/'} className="navbar-brand">React Route</Link>
                </div>

            </nav>
        </React.Fragment>
    )
}
export default Navbar;