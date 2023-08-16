// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        if(password !== confirmPassword) {
            setMessage('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                username,
                password
            });

            if(response.data.success) {
                // Successfully signed up.
                // You can navigate to login page, or show a success message, or directly log the user in.
                setMessage('Signup successful! You can now log in.');
            } else {
                // Handle signup error.
                setMessage(response.data.message);
            }
        } catch(error) {
            console.error("Error signing up:", error);
            setMessage('Error signing up. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
            <button onClick={handleSignup}>Signup</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;
