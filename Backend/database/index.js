import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// database connection
export const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
