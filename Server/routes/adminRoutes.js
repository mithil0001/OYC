const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  manageCars,
} = require("../controllers/adminController");
const { authMiddleware, requireRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/users", authMiddleware, requireRole("admin"), getUsers);
router.get("/users/:id", authMiddleware, requireRole("admin"), getUserById);
router.put("/users/:id", authMiddleware, requireRole("admin"), updateUser);
router.delete("/users/:id", authMiddleware, requireRole("admin"), deleteUser);
router.get("/cars", authMiddleware, requireRole("admin"), manageCars);

module.exports = router;
