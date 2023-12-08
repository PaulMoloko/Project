// signup.js
const express = require("express");
const router = express.Router();

// Define your signup route here
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const { firstName, lastName, email, telephoneNumber, password, confirmPassword } = req.body;

    
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
