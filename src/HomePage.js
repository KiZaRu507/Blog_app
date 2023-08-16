import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
          const response = await axios.get('http://localhost:5000/blogs');
          // Set the blogs in the state
          setBlogs(response.data);
        } catch (error) {
          console.error("Error fetching blogs:", error);
          // Handle error. Maybe set an error message in state.
        }
    };

    return (
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
