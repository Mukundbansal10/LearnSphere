const express = require('express');
<<<<<<< HEAD
const bcrypt = require('bcryptjs');  // For password hashing
const User = require('../models/User');

const router = express.Router();

// POST /api/auth/register - User Registration
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
=======
const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Example validation logic
    if (email === 'Mukund@example.com' && password === 'venom123') {
        return res.status(200).json({ message: 'Login Successful', token: 'dummy_token' });
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
>>>>>>> 75856773b61f9b2999044ba62eb6698fa0ba1183
    }
});

module.exports = router;
