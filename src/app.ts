import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import routes from './api/routes'
import notFoundHandler from './api/middlewares/not-found-handler'
import errorHandler from './api/middlewares/error-handler'

const app = express()

app.use(helmet())
app.use(cors())

app.use(routes)
app.use(notFoundHandler)
app.use(errorHandler)

export default app
