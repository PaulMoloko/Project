import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

function Login() {

    const [formData, setFormData]= useState({
        email: "",
        password:"",
        
    });

    const [errors, setErrors] = useState({

    });

    const handleChange = (e) =>{
        const {name, value}= e.target;
        setFormData ({
            ...formData,
            [name]: value,
        })
    };

    // ... (existing code)

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validateForm(formData);

  if (Object.keys(validationErrors).length === 0) {
    try {
      // Make an HTTP POST request to the login API
      const response = await axios.post("http://localhost:8082/api/login", formData);

      // Handle the response accordingly
      console.log(response.data.message); 
    } catch (error) {
      console.error("Error during login:", error.response.data.error);
    }
  } else {
    setErrors(validationErrors);
  }
};



    const validateForm = (data) =>{
        const errors = {};

        if(!data.email){
            errors.email ="email is required";
        }

        if(!data.password){
            errors.password = "password is required";
        }

        

        return errors;
    }


  return (
    <div className='login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor="Email"></label>
            <input type="email" name="email" placeholder="Enter your Email" className='form-control' value={formData.email} onChange={handleChange}/>
            {errors.email && (
                <p className="text-danger">{errors.email}</p>
            )}
          </div>

          <div className='mb-2'>
            <label htmlFor="Password"></label>
            <input type="password" name="password" placeholder="Enter your Password" className='form-control' value={formData.password} onChange={handleChange} />
            {errors.password && (
                <p className="text-danger">{errors.password}</p>
            )}
          </div>

          <div className='mb-2'>
            <input type="checkbox" className='custom-control custom-checkbox' />
            <label htmlFor='check' className='custom-input-label'>Remember me</label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign In</button>
          </div>
        </form>
        
        {/* Add the "Forgot Password" question or hint */}
        <div className="mt-3">
          <p>Forgot your password? <Link to="/forgot">Click here</Link></p>
        </div>

        {/* Add the "Sign Up" button */}
        <div className="text-end mt-2">
          <p>Don't have an account? <Link to="/signup" className="ms-2">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
