// backend/models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  seats: { type: Number, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;



// // models/Reservation.js
// const mongoose = require('mongoose');

// // Define the schema for the reservation
// const reservationSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,  // Using Date type for the date
//     required: true,
//   },
//   time: {
//     type: String,  // Time will be stored as a string (e.g., "7:00 PM")
//     required: true,
//   },
//   seats: {
//     type: Number,
//     required: true,
//   },
//   cartItems: [
//     {
//       id: {
//         type: Number,
//         required: true,
//       },
//       name: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       originalPrice: {
//         type: Number,
//         required: true,
//       },
//       discountPercentage: {
//         type: Number,
//         required: true,
//       },
//       discountedPrice: {
//         type: Number,
//         required: true,
//       },
//       quantity: {
//         type: Number,
//         required: true,
//       },
//     },
//   ],
//   total: {
//     type: Number,
//     required: true,
//   },
// }, { timestamps: true });  // Added timestamps for created and updated time

// // Create the Reservation model
// const Reservation = mongoose.model('Reservation', reservationSchema);

// module.exports = Reservation;
