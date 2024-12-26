// backend/routes/courses.js
const express = require('express');
const Course = require('../models/Course'); // Import the Course model
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        
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
