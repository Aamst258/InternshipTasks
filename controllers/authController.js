/*==============
Home page logic 
=============*/

const User = require("../models/userModel");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to home page");
  } catch (error) {
    res.status(400).send({ message: "Page not found" });
  }
};

/*========= 
Registration Page   logic
======= */
// 1 . Get Registration Data Retrieve user data (username, email, password)
//2 . Check Email Existence check if the email is already registered.
// 3 Hash Password: Securely hash password using bcrypt
// 4 create User : Create a new user with hashed password
// 5 Save to DB Save user data to the database
// 6 Respond: Respond with Registration Successful or handle errors
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "user is already registered" });
    }

   const userCreated  =  await User.create({ username, email, phone, password });

    res.status(200).json({ msg:userCreated });
  } catch (error) {
    res.status(400).json({
      message: "page not found",
    });
  }
};

module.exports = { home, register };
