import asyncHandler from "express-async-handler";

const protectAdmin = asyncHandler(async (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    res.status(403);
    throw new Error("Not authorized as admin");
  }
  next();
});

export { protectAdmin };
