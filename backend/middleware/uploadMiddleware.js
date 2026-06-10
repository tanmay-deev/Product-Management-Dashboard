import multer from "multer";

import { CloudinaryStorage } from "multer-storage-cloudinary";

import cloudinary from "../config/cloudinary.js";


// Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,

  params: {
    folder: "products",

    allowed_formats: ["jpg", "png", "jpeg"],
  },
});


// Multer Upload
const upload = multer({
  storage,
});

export default upload;