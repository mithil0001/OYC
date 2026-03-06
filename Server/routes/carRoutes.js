const express = require("express");
const {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const { authMiddleware, requireRole } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer");

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", authMiddleware, requireRole("admin"), upload.single("image"), addCar);
router.put("/:id", authMiddleware, requireRole("admin"), upload.single("image"), updateCar);
router.delete("/:id", authMiddleware, requireRole("admin"), deleteCar);

module.exports = router;
