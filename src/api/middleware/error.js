// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let { statusCode } = err;
  if (!statusCode) {
    statusCode = 500;
  }
  res.status(statusCode).json({
    message: err.message,
  });
};
