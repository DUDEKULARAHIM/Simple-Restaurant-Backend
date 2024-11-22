const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();



router.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find(); // Fetch all feedback from MongoDB
    res.status(200).json(feedbacks); // Send the feedback as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback', error });
  }
});



// POST route to submit feedback
router.post('/feedback', async (req, res) => {
  const { username, phone, comments } = req.body;

  try {
    // Create new feedback entry
    const newFeedback = new Feedback({
      username,
      phone,
      comments,
    });

    // Save feedback to MongoDB
    await newFeedback.save();
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error });
  }
});

module.exports = router;
