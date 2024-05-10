import React from 'react';
import { Link } from "react-router-dom";
import '../../src/App.css'

const Header = () => {
    return (
        <div className="header" style={{ fontFamily: 'sans-serif',  }}>
            <h1 style={{ marginRight: 'auto' }}><a href='/'>SERVER SPHERE</a></h1>
            <div className="navbar">
                <button className='button'><Link to="/login" style={{ textDecoration: 'none', color:'black' }}>Login</Link></button>
                <button className='button'><Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Register</Link></button>
            </div>
        </div>
    );
};

export default Header;
