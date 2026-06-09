import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

connectDB();

const seedUsers = async () => {
  try {
    // Delete old users
    await User.deleteMany();

    // Create users
    const users = [
      {
        username: "admin",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
      },

      {
        username: "user",
        password: await bcrypt.hash("user123", 10),
        role: "user",
      },
    ];

    await User.insertMany(users);

    console.log("Users Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedUsers();