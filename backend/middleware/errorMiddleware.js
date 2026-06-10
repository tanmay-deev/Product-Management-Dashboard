import mongoose from "mongoose";


// HANDLE INVALID OBJECT ID
export const validateObjectId = (req, res, next) => {

  const { id } = req.params;

  // Check MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid Product ID",
    });
  }

  next();
};



// GLOBAL ERROR HANDLER
export const errorHandler = (err, req, res, next) => {

  console.log(err);

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};