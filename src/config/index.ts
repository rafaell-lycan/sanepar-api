const config = {
  prod: ['production', 'heroku'].includes(process.env.NODE_ENV || ''),
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8080,
  log: {
    level: process.env.LOG_LEVEL || 'warn',
  },
}

export default config
