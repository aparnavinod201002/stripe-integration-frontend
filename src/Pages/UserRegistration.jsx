import React, { useState } from "react";
import "./user.css"; 
import { createUserAPI } from "../Service/allAPI";

function UserRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // call your backend API through userCreationAPI
      const response = await createUserAPI({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("API Response:", response);
      
      if (response.status === 201) {
        alert("User registered successfully!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // reset form
      } else {
        alert(response.data?.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">User Registration</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>
        <p className="register-footer">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default UserRegistration;
