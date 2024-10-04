import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
  }

  // Extract the token part after 'Bearer '
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Please log in again." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the userId to the request body for further use
    req.body.userId = decoded.id;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Token is invalid or expired." });
  }
};

export default authUser;
