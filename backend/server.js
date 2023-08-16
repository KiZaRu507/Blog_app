const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(bodyParser.json());

const usersFilePath = './users.json';
const blogsFilePath = './blogs.json';

app.post('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid credentials!' });
    }
});

app.post('/signup', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath));
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.json({ success: false, message: 'Username already exists!' });
    }
    users.push({ username, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
    res.json({ success: true });
});

app.get('/blogs', (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(blogsFilePath));
    res.json(blogs);
});

app.post('/blog', (req, res) => {
    const blogs = JSON.parse(fs.readFileSync(blogsFilePath));
    blogs.push(req.body);
    fs.writeFileSync(blogsFilePath, JSON.stringify(blogs, null, 4));
    res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
