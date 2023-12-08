import React from "react";  // Import the React library.
import Todo from "./Todo";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// Import necessary components and functions from 'react-router-dom'.
import 'bootstrap/dist/css/bootstrap.min.css'


import Login from './Login'; // Import the 'Login' component from the 'Login.js' file in the same directory.
import Signup from './Signup'; // Import the 'Signup' component from the 'Signup.js' file in the same directory.

function newone() { // Define a function component named 'newapp'.
  return (
    <BrowserRouter> {/* Use the 'BrowserRouter' component from 'react-router-dom' to set up client-side routing. */}
      <Routes> {/* Define a collection of routes within the 'Routes' component. */}
        <Route path='/Login/' element={<Login />} /> {/* Define a route for the root URL ('/') that renders the 'Login' component. */}
        <Route path='/signup' element={<Signup />} /> {/* Define a route for the '/signup' URL that renders the 'Signup' component. */}
        <Route path='/todo' element={<Todo/>}/>{/*Define a route for the '/todo*/}
      </Routes>
    </BrowserRouter>
  );
}

export default newone; // Export the 'newapp' component as the default export of this module.
