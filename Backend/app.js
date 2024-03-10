import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import from files
import { mongoDB } from './database/index.js'
import reportRouter from "./routes/index.js";

// Load environment variables from .env file
dotenv.config();

// Create a new instance of an Express application
const app = express();

// Connecting server and database
mongoDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route splitting
app.use("/", reportRouter);

// Variables
const PORT = process.env.PORT || 8000;

// Listen to connections
app.listen(PORT, () => {
  console.log(`Server is active on Port ${PORT}`);
});
