import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    telephoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make an HTTP POST request to the signup API
        await axios.post("http://localhost:8082/api/signup", formData);

        // Reset the form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephoneNumber: "",
          password: "",
          confirmPassword: "",
        });

        console.log("User registered successfully");
      } catch (error) {
        console.error("Error during signup:", error.response.data.error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!data.email.trim()) {
      errors.email = " Email is required";
    }

    if (!data.telephoneNumber.trim()) {
      errors.telephoneNumber = "Telephone Number is required";
    }

    if (data.telephoneNumber.trim() && !/^\d+$/.test(data.telephoneNumber)) {
      errors.telephoneNumber = "Telephone Number must contain only numbers";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-danger">{errors.email}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="telephoneNumber"
              placeholder="Telephone Number"
              className="form-control"
              value={formData.telephoneNumber}
              onChange={handleChange}
            />
            {errors.telephoneNumber && (
              <p className="text-danger">{errors.telephoneNumber}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>

        {/* Add a link to navigate back to the login page */}
        <div className="mt-3">
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
