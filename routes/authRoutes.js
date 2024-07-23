const express  =  require('express') ;
// const {home , register} =  require("../controllers/authController")
const authController = require("../controllers/authController");
const router  =  express.Router();

// router.get("/",(req,res) =>{
//     res.status(200).send("Welcome to Home page");
// })   

router.route("/").get(authController.home)  

// register
router.route("/register").post(authController.register);
 

module.exports = router