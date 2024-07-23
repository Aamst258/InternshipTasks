const User = require("../models/userModel");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to home page");
  } catch (error) {
    res.status(400).send({ message: "Page not found" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "user is already registered" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    res.status(400).json({
      message: "page not found",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;

    const userExist = await User.findOneAndDelete({ email });

    if (!userExist) {
      return res.status(400).json({ msg: "user not found" });
    }

    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(400).json({
      message: "page not found",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const updateData = req.body;

    const userExist = await User.findOneAndUpdate({ email }, updateData, {
      new: true,
    });

    if (!userExist) {
      return res.status(400).json({ msg: "user not found" });
    }

    res.status(200).json({ msg: "user updated successfully", user: userExist });
  } catch (error) {
    res.status(400).json({
      message: "page not found",
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "user not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({
      message: "page not found",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({
      message: "page not found",
    });
  }
};

module.exports = { home, register, deleteUser, updateUser, getUserByEmail, getAllUsers };
