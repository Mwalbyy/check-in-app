// server.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to handle JSON and enable CORS
app.use(express.json());
app.use(cors());

// server.js 

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Connect to MongoDB
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Example route to test server
app.get('/', (req, res) => {
  res.send('API is def running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
