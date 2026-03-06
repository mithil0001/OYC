const mongoose = require("mongoose");

const myBookingSchema = new mongoose.Schema({
  selectedPickupState: { type: String, required: true, trim: true },
  selectedPickupCity: { type: String, required: true, trim: true },
  selectedDropState: { type: String, required: true, trim: true },
  selectedDropCity: { type: String, required: true, trim: true },
  pickupdate: { type: String, required: true, trim: true },
  pickuptime: { type: String, required: true, trim: true },
  dropdate: { type: String, required: true, trim: true },
  droptime: { type: String, required: true, trim: true },
  drivername: { type: String, required: true, trim: true },
  fare: { type: String, required: true, trim: true },
  carname: { type: String, required: true, trim: true },
  cartype: { type: String, required: true, trim: true },
  carno: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: { type: String, required: true, trim: true },
  bookeddate: {
    type: String,
    default: () => new Date().toLocaleDateString("hi-IN"),
  },
  status: { type: String, trim: true, default: "Confirmed" },
}, { timestamps: true });

module.exports = mongoose.model("MyBooking", myBookingSchema);
