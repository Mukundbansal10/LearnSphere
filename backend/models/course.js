// backend/models/Course.js
const mongoose = require('mongoose');

// Define the schema for a course
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

// Create a model based on the schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
