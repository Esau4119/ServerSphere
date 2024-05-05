import React, { useState } from 'react';
import { search } from '../routes/signup';
import { login } from '../routes/login';
import { logout } from '../routes/logout';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = (event)  => {
        event.preventDefault(); 
        if(username !== '' && password !== ''){
             search(username, password, confirmPassword); 
            var user = JSON.parse(sessionStorage.getItem('user'));
            console.log("In Homepage",user)
        }
       
        
    };
    const handleSubmitPart2 = (event) => {
        event.preventDefault(); 
        if(username !== '' && password !== ''){
             login(username, password);
        }
    };
    const handleSubmitPart3 = (event) => {
        event.preventDefault();
             logout();
    };

    return (
        <div>
            <h1>HomePage</h1>
            <p>Hello welcome to Homepage</p>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}
                         ></input>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}
                         required></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <h1>Login</h1>
        <form onSubmit={handleSubmitPart2}>
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username2" name="username" onChange={(e) => setUsername(e.target.value)}
                         ></input>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password2" name="password" onChange={(e) => setPassword(e.target.value)}
                         required></input>
            </div>
            <button type="submit">Login</button>
        </form>
        <button onClick={handleSubmitPart3}>LogOut</button>
        </div>
    );
};


export default HomePage;