import pino from 'pino'

import config from '../config'

const logger = pino({
  level: config.log.level,
  prettyPrint: !config.prod,
})

export default logger
