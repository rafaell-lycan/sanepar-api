import { ErrorRequestHandler } from 'express'

import logger from '../../utils/logger'
import { WebError } from '../../utils/errors'

const errorHandler: ErrorRequestHandler = (err: WebError, _req, res, _next) => {
  logger.error(err)
  const message = err.message || 'Something went wrong. Please try again.'
  const status = err.status || 500

  res.status(status).json({ message, status })
}

export default errorHandler
