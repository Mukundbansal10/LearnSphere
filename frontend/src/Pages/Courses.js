import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import "./css/courses.css";
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState('');

    // Fetch courses from the backend
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (err) {
                setError('Failed to fetch courses. Please try again later.');
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="courses-container">
            <h1>Available Courses</h1>
            {error && <p className="error">{error}</p>}
            <div className="courses-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
