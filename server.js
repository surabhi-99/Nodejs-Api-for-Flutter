const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

const users = []; // This will store registered users
const secretKey = 'yourSecretKey'; // Secret key for JWT
const posts = [{ id: 1, title: "Hello World", body: "This is a post." }]; // Dummy data

// User Registration Endpoint
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        
        const newUser = { username, password: hashedPassword };
        users.push(newUser);
        
        res.status(201).send({ message: "User created successfully." });
    } catch (error) {
        res.status(500).send(error);
    }
});

// User Authentication Endpoint
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ error: "Authentication failed." });
        }
        
        const token = jwt.sign({ userId: user.id }, secretKey);
        res.send({ token });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Data Endpoint
app.get('/posts', (req, res) => {
    res.send(posts);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
