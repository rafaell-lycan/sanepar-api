import 'dotenv/config'
import { Server } from 'http'

import app from './app'
import config from './config'
import logger from './utils/logger'

/**
 * Start Express server.
 */
 let server: Server

async function main() {
  await app.listen(config.port)
  logger.info(`Server is running on port ${config.port}`)
}

process.on('unhandledRejection', (reason) => {
  if(reason) logger.error(reason)
  process.kill(process.pid, 'SIGTERM')
})

process.on('uncaughtException', (err) => {
  if(err) logger.error(err)
  process.kill(process.pid, 'SIGTERM')
})

/**
 * Graceful shut downs.
 */
 process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received.')
  logger.info('Closing http server.')
  server.close(() => logger.info('Http server closed.'))
})

main()
