const MyBooking = require("../models/MyBookingSchema");

const createBooking = async (req, res) => {
  try {
    const booking = await MyBooking.create({
      ...req.body,
      userId: req.body.userId || req.user.id,
      status: req.body.status || "Confirmed",
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error: error.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await MyBooking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error: error.message });
  }
};

const getBookingsByUser = async (req, res) => {
  try {
    const bookings = await MyBooking.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user bookings", error: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingsByUser,
};
