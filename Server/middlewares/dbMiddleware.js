const { isDatabaseConnected } = require("../db/config");

const dbMiddleware = (req, res, next) => {
  if (!isDatabaseConnected()) {
    return res.status(503).json({
      message: "Database is not connected. Please try again later.",
    });
  }

  next();
};

module.exports = dbMiddleware;
