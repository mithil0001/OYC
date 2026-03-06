const express = require("express");
const {
  createBooking,
  getBookings,
  getBookingsByUser,
} = require("../controllers/bookingController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/", authMiddleware, getBookings);
router.get("/user/:userId", authMiddleware, getBookingsByUser);

module.exports = router;
