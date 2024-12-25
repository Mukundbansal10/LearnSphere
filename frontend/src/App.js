<<<<<<< HEAD
import axios from 'axios';
import Register from './Pages/Register'; 
import { useEffect } from 'react';
import Courses from "./Pages/Courses"
import "./index.css"
// import "./courses.css";


function App() {
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Register />
    <Courses/>
    </>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/Login';
import CoursePage from './pages/Course';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/courses" element={<CoursePage />} />
            </Routes>
        </Router>
    );
}

export default App;
>>>>>>> 75856773b61f9b2999044ba62eb6698fa0ba1183
