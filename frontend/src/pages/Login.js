// import React, { useState } from "react";
// import axios from "axios";

import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css"; // Import the CSS file



const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      // On successful login
      setMessage(`Login Successful: ${response.data.message}`);
    } catch (error) {
      // On error
      if (error.response) {
        setMessage(`Error: ${error.response.data.message || 'Unknown error from server'}`);
      } else if (error.request) {
        setMessage('Error: No response from the server. Please check your network connection.');
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="login-container">
  <div className="card">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    {message && <div className="message">{message}</div>}
    <div>
      <p>
        Don't have an account?{" "}
        <a href="/register">Register</a>
      </p>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
