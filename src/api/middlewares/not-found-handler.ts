import { Handler } from 'express'

import { NotFoundError } from '../../utils/errors'

const notFoundHandler: Handler = (_req, _res, next) => {
  next(new NotFoundError('No route matched with those values.'))
}

export default notFoundHandler
