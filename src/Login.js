// src/components/Login.js

import React, { useState } from 'react';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle login/signup
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={credentials.username} 
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={credentials.password} 
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
