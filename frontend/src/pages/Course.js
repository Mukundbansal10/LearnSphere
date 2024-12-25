import React, { useState, useEffect } from "react";
import axios from "axios";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch courses on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses") // Adjust URL based on backend setup
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  // Filter courses by search
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Courses</h1>
      <input
        type="text"
        placeholder="Search for courses..."
        className="p-2 border rounded mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">{course.title}</h2>
            <p>{course.description}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
