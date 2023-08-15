// src/components/Home.js

import React from 'react';

function Home({ blogs }) {
    return (
        <div>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
