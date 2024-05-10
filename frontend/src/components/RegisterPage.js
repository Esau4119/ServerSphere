import React, { useState } from 'react';
import { signUp } from '../routes/signup';
import Header from './Header'; 
import '../../src/App.css'; 

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username !== '' && password !== '') {
            signUp(username, password, confirmPassword);
            var user = JSON.parse(sessionStorage.getItem('user'));
            console.log("In Homepage", user);
        }
    };

    return (
        <div className="wholepage" style={{ height: '100vh' }}>
            <Header />
            <div className='pagecontent'>
                {/* Sign Up Form */}
                <div className='page1'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className='sendbtn' type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
