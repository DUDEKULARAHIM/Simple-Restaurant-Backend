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











// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const feedbackRoutes = require('./routes/FeedbackRoutes');
// const reservationRoutes = require('./routes/ReservationRoutes');
// const cartRoutes = require('./routes/cartRoutes');

// const app = express();

// // Middleware
// app.use(express.json());

// // CORS Configuration - Customize as needed
// const corsOptions = {
//   origin: [
//     'https://sample-restaurant-website.onrender.com', // Replace with your frontend domain hosted on Render
//     'http://localhost:3000'             // Keep localhost for local development
//   ],
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);             // Authentication routes
// app.use('/api/feedback', feedbackRoutes);     // Feedback routes
// app.use('/api/reservations', reservationRoutes); // Reservation routes
// app.use('/api/cart', cartRoutes);             // Cart routes

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error('Server Error:', err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









const express = require('express');
const cors = require('cors');
const path = require('path'); // Required to handle file paths
require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db'); // MongoDB connection
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/FeedbackRoutes');
const reservationRoutes = require('./routes/ReservationRoutes');
const cartRoutes = require("./routes/cartRoutes");

const app = express();

// Middleware
app.use(express.json()); // To parse incoming JSON requests

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: 'https://sample-restaurant-website.onrender.com', // Replace with your actual frontend URL on Render
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies or credentials (if needed)
  })
);

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api', feedbackRoutes); // Feedback routes
app.use('/api', reservationRoutes); // Reservation routes
app.use("/api", cartRoutes); // Cart routes

// Serve static files from the React app (production build)
app.use(express.static(path.join(__dirname, 'frontend/build'))); // Ensure the build folder is in the frontend folder

// Catch-all handler to serve the React app for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html')); // Serve React's index.html for all unmatched routes
});

// Start the server
const PORT = process.env.PORT || 5000; // Use dynamic port from Render or fallback to 5000 locally
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



