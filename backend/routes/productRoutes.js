import express from "express";
import { validateObjectId } from "../middleware/errorMiddleware.js";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();


// GET PRODUCTS
router.get("/", authMiddleware, getProducts);


// CREATE PRODUCT
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createProduct
);


// UPDATE PRODUCT
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validateObjectId,
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