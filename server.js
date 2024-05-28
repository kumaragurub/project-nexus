const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mock user data (replace this with a database in a real-world scenario)
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists and the password is correct
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.post('/signup', (req, res) => {
    const { newUsername, newPassword } = req.body;

    // Check if the username is already taken
    if (users.find(u => u.username === newUsername)) {
        res.json({ success: false, message: 'Username already taken' });
    } else {
        // Add the new user to the mock database
        users.push({ username: newUsername, password: newPassword });
        res.json({ success: true, message: 'Signup successful' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
