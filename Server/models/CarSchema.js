const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  drivername: { type: String, required: true, trim: true },
  carImage: { type: String, default: "" },
  carname: { type: String, required: true, trim: true },
  cartype: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: "" },
  bestFor: { type: String, trim: true, default: "" },
  imagePosition: { type: String, trim: true, default: "center center" },
  transmission: { type: String, trim: true, default: "" },
  fuel: { type: String, trim: true, default: "" },
  seats: { type: Number, default: 4 },
  status: { type: String, trim: true, default: "Available" },
  carno: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);
