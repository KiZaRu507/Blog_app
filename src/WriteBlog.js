// src/components/WriteBlog.js

import React, { useState } from 'react';

function WriteBlog() {
    const [blog, setBlog] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the blog
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Blog Title" 
                    value={blog.title} 
                    onChange={handleChange}
                />
                <textarea 
                    name="content" 
                    placeholder="Write your blog here..." 
                    value={blog.content} 
                    onChange={handleChange}
                />
                <button type="submit">Publish</button>
            </form>
        </div>
    );
}

export default WriteBlog;
