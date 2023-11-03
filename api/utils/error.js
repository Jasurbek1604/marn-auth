export const errorhandler = (statusCode, message) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  return err;
};
