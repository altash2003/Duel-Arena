const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. ENABLE DATA PARSING (Crucial for Login/Signup)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// 2. SERVE STATIC FILES (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// 3. LOGIN ROUTE (The missing piece)
app.post('/login', (req, res) => {
    console.log('Login attempt:', req.body);
    const { username, password } = req.body;

    // TODO: Replace this with real database logic later
    if (username && password) {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.status(400).json({ success: false, message: "Missing credentials" });
    }
});

// 4. SIGNUP ROUTE
app.post('/register', (req, res) => {
    console.log('Register attempt:', req.body);
    // TODO: Add database logic here
    res.json({ success: true, message: "User registered!" });
});

// 5. DEFAULT ROUTE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 6. START SERVER
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
