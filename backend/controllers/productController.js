import Product from "../models/Product.js";


// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {

    // Search Query
    const search = req.query.search || "";

    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    // Skip Calculation
    const skip = (page - 1) * limit;

    // Search Filter
    const searchFilter = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    };

    // Get Products
    const products = await Product.find(searchFilter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Total Products Count
    const totalProducts = await Product.countDocuments(searchFilter);

    res.status(200).json({
      products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {

    const { name, price, category } = req.body;

    // Validation
    if (!name || !price || !category) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {

    const { id } = req.params;

    const { name, price, category } = req.body;

    const product = await Product.findById(id);

    // Product not found
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;

    const updatedProduct = await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      updatedProduct,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {

    const { id } = req.params;

    const product = await Product.findById(id);

    // Product not found
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};