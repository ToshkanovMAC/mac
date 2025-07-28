const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mac:mac@cluster0.lzoc89j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongoose ulandi");
  } catch (err) {
    console.error("ERROR ", err.message);
  }
};

module.exports = connectDB;
