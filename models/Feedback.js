const mongoose = require('mongoose');

// Define the Feedback Schema
const feedbackSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true },
  comments: { type: String, required: true },
});

// Create Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
