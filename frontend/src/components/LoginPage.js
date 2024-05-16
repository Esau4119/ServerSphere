import React, { useState } from 'react';
import { login } from '../routes/login';
import Header from './Header'; 
import '../../src/App.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitPart2 = (event) => {
        event.preventDefault(); 
        if (username !== '' && password !== '') {
             login(username, password);
        }
    };

    return (
        <div className="wholepage" style={{ height: '100vh' }}>  
            <Header /> 
            <div className='pagecontent'>
                {/* Login Form */}
                <div className='page1'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmitPart2}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username2" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password2" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className='sendbtn' type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
