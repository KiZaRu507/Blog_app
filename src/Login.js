// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({ ...prevState, [name]: value }));
    }

    

// In your login component or function:
const handleLogin = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      username,
      password,
    });
    
    if (response.data.success) {
      // Successfully logged in.
      // Navigate to home page or set user state.
    } else {
      // Handle login error. Maybe set an error message in state.
    }
  } catch (error) {
    console.error("Error logging in:", error);
    // Handle general error. Maybe set an error message in state.
  }
};



    return (
        <div>
            <form onSubmit={handleLogin}>
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
