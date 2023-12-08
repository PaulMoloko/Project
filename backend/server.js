// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const signupRouter = require("./signup");
const signup = require("./signup")
//const loginRouter = require("./login")

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

const uri = "mongodb+srv://paul:12345Paul@cluster0.mo6ejs4.mongodb.net/";

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
  }
}
require("./UserDetails");
// Call the connect function to establish the MongoDB connection
connect();

// Use the signup router for the /api/signup route
app.use("/api/signup", signupRouter);
//app.use("/api/login", loginRouter)

app.listen(8082, () => {
  console.log("Server is listening on port 8082");
});
