const express = require('express');
const mongoose = require('mongoose');
const mealPlanRoutes = require('./routes/mealPlanRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use routes for meal plan operations
app.use('/api', mealPlanRoutes);

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost/mealplanner', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

