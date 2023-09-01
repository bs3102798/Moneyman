import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dataform">dataform</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;