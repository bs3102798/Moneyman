import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav>
            <Link to="/">Home &nbsp;  &nbsp;  &nbsp;  &nbsp;</Link>
            <Link to="/dashboard">Dashboard &nbsp;  &nbsp;  &nbsp;  &nbsp;</Link>
            {/* <li><Link to="/dataform">dataform</Link></li> */}
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Nav;