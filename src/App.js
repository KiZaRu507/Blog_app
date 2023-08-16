// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomePage from './HomePage';
import WriteBlog from './WriteBlog';

function App() {
    return (
        <Router>
            <div>
                {/* Basic Navigation Links */}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/write">Write Blog</Link>
                </nav>

                {/* Routes Definition */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/write" element={<WriteBlog />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
