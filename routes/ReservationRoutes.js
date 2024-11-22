// backend/routes/reservationRoutes.js
const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

// Handle new reservation (registration)
router.post('/registration', async (req, res) => {
  const { name, email, phone, date, time, seats } = req.body;

  try {
    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      seats
    });

    await newReservation.save();
    res.status(201).json({ message: "Reservation successfully made!" });
  } catch (error) {
    console.error('Error saving reservation:', error);
    res.status(500).json({ error: 'Failed to make reservation' });
  }
});

module.exports = router;





