import React, { useState } from 'react';
import { Msg } from '../routes/msg';
import { Recent } from '../routes/recent';
import { Link } from "react-router-dom";
import Header from './Header'; 
import '../../src/App.css';

const HomePage = () => {
    const recentMessage = Recent();
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');
    
    var user;
    if (sessionStorage.getItem('user')) {
        user = sessionStorage.getItem('user')
    }

    // Function to set value based on session presence
    function setValue() {
        var input = document.getElementById('username3');
        if (user == null || user == undefined) {
            input.innerHTML = 'RANDOM';
        } else {
            input.innerHTML = user;
        }
    }

    // Call the function when the page loads
    window.onload = setValue;

    const handleSubmitPart4 = (event) => {
        event.preventDefault();
        if (user == null || user == 'undefined') {
            Msg("RANDOM", msg)
        } else {
            Msg(user, msg);
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
                        <div type="text" id="username3" ></div>
                        <br />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="2" onChange={(e) =>{ setMsg(e.target.value)}} required></textarea>
                        <br />
                        <button className='sendbtn' type="submit">ENTER</button>
                        
                    </form>
                    <br/>
                </div>
            </div>

            {/* Most Recent */}
            <div id="messageContainer"></div>
        </div>
    );
};

export default HomePage;
