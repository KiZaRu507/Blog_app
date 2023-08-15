import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import WriteBlog from './WriteBlog';

function App() {
    const dummyBlogs = [
        { title: "Sample Blog 1", content: "This is the content of sample blog 1" },
        { title: "Sample Blog 2", content: "This is the content of sample blog 2" }
    ];

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/write">Write Blog</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home blogs={dummyBlogs} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/write" element={<WriteBlog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
