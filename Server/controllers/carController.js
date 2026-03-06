const Car = require("../models/CarSchema");

const buildCarPayload = (req) => ({
  ...req.body,
  seats: req.body.seats ? Number(req.body.seats) : undefined,
  carImage: req.file ? `/uploads/${req.file.filename}` : req.body.carImage,
});

const getCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cars", error: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch car", error: error.message });
  }
};

const addCar = async (req, res) => {
  try {
    const car = await Car.create(buildCarPayload(req));
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: "Failed to add car", error: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const payload = buildCarPayload(req);
    if (!payload.carImage) {
      delete payload.carImage;
    }

    const car = await Car.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Failed to update car", error: error.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete car", error: error.message });
  }
};

module.exports = {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
};
