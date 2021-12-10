import { ErrorRequestHandler } from 'express'
import logger from '../../utils/logger';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  logger.error(err)
  const message = err.message || 'Something went wrong. Please try again.'
  const status = 500

  res.status(status).json({ message, status })
}

export default errorHandler
