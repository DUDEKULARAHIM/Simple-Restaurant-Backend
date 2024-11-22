// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const feedbackRoutes = require('./routes/FeedbackRoutes'); // Import feedback routes
// const reservationRoutes = require('./routes/ReservationRoutes'); // Import reservation routes
// const cartRoutes = require("./routes/cartRoutes");
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({
//   origin: 'https://sample-restaurant-website.onrender.com'
// }));

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api', feedbackRoutes); // Set up feedback routes
// app.use('/api', reservationRoutes);
// app.use("/api", cartRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/FeedbackRoutes');
const reservationRoutes = require('./routes/ReservationRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration - Customize as needed
const corsOptions = {
  origin: [
    'https://your-frontend-domain.com', // Replace with your frontend domain hosted on Render
    'http://localhost:3000'             // Keep localhost for local development
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);             // Authentication routes
app.use('/api/feedback', feedbackRoutes);     // Feedback routes
app.use('/api/reservations', reservationRoutes); // Reservation routes
app.use('/api/cart', cartRoutes);             // Cart routes

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



