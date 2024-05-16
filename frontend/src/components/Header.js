import React from 'react';
import { Link } from "react-router-dom";
import '../../src/App.css'
import { logout } from '../routes/logout';
const Header = () => {
    var user;
    
    if (sessionStorage.getItem('user')) {
        user = sessionStorage.getItem('user')
    }


    const handleSubmitPart3 = (event) => {
        event.preventDefault();
        logout();
    };

    
    return (
        <div className="header" style={{ fontFamily: 'sans-serif',  }}>
            <h1 style={{ marginRight: 'auto' }}><a href='/'>SERVER SPHERE</a></h1>
            <div className="navbar">
                {user ? (
                    <div>
                        {/* Logout */}
                        <form onSubmit={handleSubmitPart3}>
                        <button className='button'  
                            style={{ 
                                textDecoration: 'none', 
                                color: 'black' 
                            }}type='submit'> 
                               LOGOUT
                        </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <button className='button'>
                        <Link to="/login" style={{ 
                            textDecoration: 'none', color: 'black'
                            }}>
                                Login
                        </Link>
                    </button>

                    <button className='button'>
                        <Link to="/register" style={{ 
                            textDecoration: 'none', color: 'black'
                            }}>
                                Sign Up
                        </Link>
                    </button>    
                  
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
