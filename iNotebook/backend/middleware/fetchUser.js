const jwt = require("jsonwebtoken");

const JWT_SECRET = "harryisagood$boy";

const fetchUser = (req, res, next) => {
  // get the user from the JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token)
    res.status(401).send({ error: "please authenticate using a valid token" });
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  next();
};

module.exports = fetchUser;
