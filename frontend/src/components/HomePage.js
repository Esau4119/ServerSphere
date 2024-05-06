import React, { useState } from 'react';
import { signUp } from '../routes/signup';
import { login } from '../routes/login';
import { logout } from '../routes/logout';
import { Msg } from '../routes/msg';
import { Recent } from '../routes/recent';

const HomePage = () => {
    const recentMessage = Recent();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMSg] = useState('');
    
    const handleSubmit = (event)  => {
        event.preventDefault(); 
        if(username !== '' && password !== ''){
             signUp(username, password, confirmPassword); 
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
    const handleSubmitPart4 = (event) => {
        event.preventDefault(); 
        if(username !== '' && msg !== ''){
             Msg(username, msg);
        }
    };
    return (
        <div>
                {/* //////////SIGNUP////////////// */}
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

            {/* ///////////LOGIN//////////////// */}

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

            {/* ///////////SEND MSG//////////////// */}
                <h1>Send Message</h1>
            <form onSubmit={handleSubmitPart4}>
                <label for="username">Username:</label>
                <input type="text" id="username3" name="username" onChange={(e) => setUsername(e.target.value)} required></input>
                    <br></br>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="2" onChange={(e) => setMSg(e.target.value)} required></textarea>
                <br></br>
                <button type="submit">ENTER</button>
            </form>

            {/* //////////////LOGOUT/////////////// */}

            <form onSubmit={handleSubmitPart3}>
                <button type="submit">LogOut</button>
            </form>

            {/* //////////////MOST RECENT////////////////// */}
            <div id="messageContainer">
        
            </div>
        </div>
    );
};


export default HomePage;