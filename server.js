require("dotenv").config();
//environmental variables can't be accesed with above line
const express = require("express");
const app = express();  
const router =  require("./routes/authRoutes"); 
const connectDb  = require("./utils/db");

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!! ");
// });   

// app.get("/register", (req, res) => {
//   res.status(200).send("Welcome to Registration Page ");
// }); 
 
// 

// this is middleware 
app.use(express.json());
app.use("/api/auth", router)
const port = process.env.PORT ||  8001; 
connectDb().then(()=> {
  app.listen(port, () => {
    console.log(`server is running ${port}`);
  });
})
  

