import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Protected Route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// Admin Route
router.get(
  "/admin",
  authMiddleware,
  adminMiddleware,
  (req, res) => {
    res.json({
      message: "Admin route accessed",
    });
  }
);

export default router;