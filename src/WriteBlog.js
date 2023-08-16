import React, { useState } from 'react';
import axios from 'axios';

function WriteBlog() {
    const [blogContent, setBlogContent] = useState('');

    const createBlog = async () => {
        try {
          const response = await axios.post('http://localhost:5000/blog', { content: blogContent });
          if (response.data.success) {
            // Blog created successfully.
            // Maybe navigate to home page or refresh blogs list.
          } else {
            // Handle blog creation error.
          }
        } catch (error) {
          console.error("Error creating blog:", error);
          // Handle error. Maybe set an error message in state.
        }
      };

    return (
        <div>
            <textarea value={blogContent} onChange={(e) => setBlogContent(e.target.value)} placeholder="Write your blog here..."></textarea>
            <button onClick={createBlog}>Publish</button>
        </div>
    );
}

export default WriteBlog;
