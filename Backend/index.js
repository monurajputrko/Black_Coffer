const express = require("express");
const mongoose = require("mongoose");
const env_var = require("dotenv").config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(`${process.env.mongoUrl}`);

// Create a schema for your data
const DataSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Data = mongoose.model("Data", DataSchema);

// Define your API routes
app.get("/data", async (req, res) => {
  try {
    const Datas = await Data.find();
    res.json(Datas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/Datas", async (req, res) => {
  const Data = new Data({
    title: req.body.title,
    completed: false,
  });

  try {
    const newData = await Data.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
