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
