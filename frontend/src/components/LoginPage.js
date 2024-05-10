import React, { useState } from 'react';
import { login } from '../routes/login';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmitPart2 = (event) => {
        event.preventDefault(); 
        if(username !== '' && password !== ''){
             login(username, password);
        }
    };
    return (
        <div>
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
        </div>
    )
}
export default LoginPage;