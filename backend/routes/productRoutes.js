import express from "express";
import { validateObjectId } from "../middleware/errorMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();


// GET PRODUCTS
router.get("/", authMiddleware, getProducts);

// GET SINGLE PRODUCT
router.get(
  "/:id",
  authMiddleware,
  validateObjectId,
  getProductById
);


// CREATE PRODUCT
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  createProduct
);


// UPDATE PRODUCT
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validateObjectId,
  upload.single("image"),
  updateProduct
);


// DELETE PRODUCT
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validateObjectId,
  deleteProduct
);

export default router;