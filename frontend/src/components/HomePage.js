import React, { useState } from 'react';
import { Msg } from '../routes/msg';
import { logout } from '../routes/logout';
import { Link } from "react-router-dom";
import Header from './Header'; 
import '../../src/App.css';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');

    var user = sessionStorage.getItem('user');
    if(user){}
    console.log(user)


    const handleSubmitPart3 = (event) => {
        event.preventDefault();
        logout();
    };

    const handleSubmitPart4 = (event) => {
        event.preventDefault(); 
        if (username !== '' && msg !== '') {
            Msg(username, msg);
        }
    };

    return (
        <div className="wholepage" style={{ height: '100vh' }}>
            <Header /> 
            <div className='pagecontent'>
                <h1>HomePage</h1>
                <p>Hello, welcome to Homepage</p>

                {/* Send Message */}
                <div className='page1'>
                    <h1>Send Message</h1>
                    <form onSubmit={handleSubmitPart4}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username3" name="username" onChange={(e) => setUsername(e.target.value)} required />
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="2" onChange={(e) => setMsg(e.target.value)} required></textarea>
                        <br />
                        <button className='sendbtn' type="submit">ENTER</button>
                        
                    </form>
                    <br/>
                    {/* Logout */}
                    <form onSubmit={handleSubmitPart3}>
                        <button className='sendbtn' type="submit">LogOut</button>
                    </form>
                </div>
            </div>

            {/* Most Recent */}
            <div id="messageContainer"></div>
        </div>
    );
};

export default HomePage;
