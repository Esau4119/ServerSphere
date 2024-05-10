import React, { useState } from 'react';
import { signUp } from '../routes/signup';
const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (event)  => {
        event.preventDefault(); 
        if(username !== '' && password !== ''){
             signUp(username, password, confirmPassword); 
            var user = JSON.parse(sessionStorage.getItem('user'));
            console.log("In Homepage",user)
        }
    };
    return (
        <div>
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
        </div>
    )
}
export default RegisterPage;