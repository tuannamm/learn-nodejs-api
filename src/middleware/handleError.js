import createError from "http-errors";

export const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(error.status).json({
    err: 1,
    msg: error.message,
  });
};

export const internalServerError = (req, res) => {
  const error = createError.InternalServerError();
  return res.status(error.status).json({
    err: -1,
    msg: error.message,
  });
};

export const notFound = (req, res) => {
  const error = createError.NotFound("This route does not exist");
  return res.status(error.status).json({
    err: 1,
    msg: error.message,
  });
};