// server/scripts/seedProducts.js
require('dotenv').config()

const mongoose = require('mongoose');
const axios = require('axios');

// 1. Define your MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URL; // Change 'yourDB' to your DB name

// 2. Define your product schema (should match FakeStoreAPI structure)
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
}, { strict: false }); // strict:false allows extra fields if any

const Product = mongoose.model('Product', productSchema);

// 3. Main function to fetch and insert products
async function seedProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB.');

    // Fetch products from FakeStoreAPI
    const res = await axios.get('https://fakestoreapi.com/products');
    const products = res.data;

    // Optional: Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products.');

    // Insert fetched products
    await Product.insertMany(products);
    console.log('Inserted products:', products.length);

    mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  } catch (err) {
    console.error('Error:', err);
    mongoose.disconnect();
  }
}

seedProducts();
