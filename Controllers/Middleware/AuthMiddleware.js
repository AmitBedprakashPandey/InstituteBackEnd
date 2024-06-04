const jwt = require("jsonwebtoken");

// Middleware for verifying JWT token
exports.verifyToken = (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization");
  if (!token) {
    return res.status(403).json({ message: "No token, authorization denied" });
  }
  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token is not valid" });
  }
};
