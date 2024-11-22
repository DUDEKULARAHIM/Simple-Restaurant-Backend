const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// GET route to fetch all feedback
router.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find(); // Fetch all feedback from MongoDB
    res.status(200).json(feedbacks); // Send the feedback as a JSON response
  } catch (error) {
    console.error('Error retrieving feedback:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error retrieving feedback', error });
  }
});

// POST route to submit feedback
router.post('/feedback', async (req, res) => {
  const { username, phone, comments } = req.body;

  // Validate input data
  if (!username || !phone || !comments) {
    return res.status(400).json({ message: 'Please provide all required fields: username, phone, and comments.' });
  }

  try {
    // Create new feedback entry
    const newFeedback = new Feedback({
      username,
      phone,
      comments,
    });

    // Save feedback to MongoDB
    await newFeedback.save();

    // Respond with success message
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error submitting feedback', error });
  }
});

module.exports = router;
