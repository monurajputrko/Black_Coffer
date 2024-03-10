const fs = require("fs");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// Connection URI provided by MongoDB service
const uri =
  "mongodb+srv://monurajputrko:9001035341@cluster0.tqroust.mongodb.net/blackcofer?retryWrites=true&w=majority&appName=Cluster0";

// Database Name
const dbName = "blackcofer";

// Collection Name
const collectionName = "datas";

// Read the JSON file
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

// Connect to the MongoDB server
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");

    const db = mongoose.connection;
    const collection = db.collection(collectionName);

    // Insert the data into the collection
    collection
      .insertMany(data)
      .then((result) => {
        console.log("Data inserted successfully:", result.insertedCount);
        db.close(); // Close the connection after insertion
      })
      .catch((error) => {
        console.error("Error inserting data into MongoDB:", error);
        db.close(); // Close the connection in case of an error
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
