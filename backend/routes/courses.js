// backend/routes/courses.js
const express = require('express');
const Course = require('../models/Course'); // Import the Course model
const router = express.Router();

// Route to fetch all courses from the database
router.get('/', async (req, res) => {
    try {
        // Fetch all courses from the database
        const courses = await Course.find();
        
        // Send the courses as a response
        res.json(courses);
    } catch (error) {
        // Handle errors
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
