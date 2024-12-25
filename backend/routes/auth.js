const express = require('express');
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Example validation logic
    if (email === 'Mukund@example.com' && password === 'venom123') {
        return res.status(200).json({ message: 'Login Successful', token: 'dummy_token' });
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});

module.exports = router;
