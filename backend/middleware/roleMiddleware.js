const adminMiddleware = (req, res, next) => {

  // Check role
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admin only.",
    });
  }

  next();
};

export default adminMiddleware;