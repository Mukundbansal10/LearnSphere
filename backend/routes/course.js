const express = require('express');
const router = express.Router();

// Dummy course data
const courses = [
  { id: 1, title: "React Basics", description: "Learn the basics of React." },
  { id: 2, title: "Advanced React", description: "Deep dive into React features." },
  { id: 3, title: "Node.js Fundamentals", description: "Master backend with Node.js." }
];

// Get all courses
router.get('/', (req, res) => {
    console.log('Fetching courses...');
    res.json(courses);
});

module.exports = router;
