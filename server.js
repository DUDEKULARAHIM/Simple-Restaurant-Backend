const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/FeedbackRoutes'); // Import feedback routes
const reservationRoutes = require('./routes/ReservationRoutes'); // Import reservation routes
const cartRoutes = require("./routes/cartRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', feedbackRoutes); // Set up feedback routes
app.use('/api', reservationRoutes);
app.use("/api", cartRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



