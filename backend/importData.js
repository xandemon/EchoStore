const fs = require("fs");
const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = JSON.parse(
  fs.readFileSync("../src/data/db.json", "utf-8")
).products;

const importData = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(products);
    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
