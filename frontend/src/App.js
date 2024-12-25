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