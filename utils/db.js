const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successfull to database");
  } catch (error) {
    console.error("database connection failed");
    console.log(URI);
    process.exit(0);
  }
};

module.exports = connectDb;
