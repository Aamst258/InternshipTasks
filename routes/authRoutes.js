const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/delete/:email").delete(authController.deleteUser);
router.route("/update/:email").put(authController.updateUser);
router.route("/user/:email").get(authController.getUserByEmail);
router.route("/users").get(authController.getAllUsers);

module.exports = router;
