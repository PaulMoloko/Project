const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        telephone: String,
        password: String
    },
    {
        collection: "newapp",
    }
);

mongoose.model("newapp", UserDetailsSchema)
