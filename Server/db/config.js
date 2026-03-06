const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/own-your-cab";

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const isDatabaseConnected = () => mongoose.connection.readyState === 1;

module.exports = {
  connectDB,
  isDatabaseConnected,
};
