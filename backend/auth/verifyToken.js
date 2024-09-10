import jwt from "jsonwebtoken";
import DoctorSchema from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // Get token from header
  const authToken = req.headers.authorization;

  // Check if no token or token does not start with 'Bearer'
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  // Extract the token from the 'Bearer' string
  const token = authToken.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user to the request object
    req.user = decoded;

    // Call the next middleware
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Token is not valid" });
  }
};
