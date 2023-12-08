/*// login.js
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const { email, password } = req.body;

    // Validate the data (you may want to move this logic to a separate module)
    const errors = validateForm({ email, password });
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // Perform the login logic (check if user credentials are valid)
    // Replace this with your actual authentication logic
    if (email === "example@example.com" && password === "password123") {
      // User authenticated successfully
      return res.status(200).json({ message: "Login successful" });
    } else {
      // Authentication failed
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const validateForm = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};

module.exports = router;
*/