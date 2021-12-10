import { Router } from 'express'
import getDamnsInformation from '../../domain/get-damns-information'

const routes = Router()

routes.get('/_health', (_req, res) => {
  res.json({ status: 'OK' })
})

routes.get('/', (_req, res) => {
  res.redirect('/api');
})

routes.get('/api', async (_req, res) => {
  try {
    const data = await getDamnsInformation()
    res.send(data)
  } catch (err) {
    throw err;
  }
})

export default routes;
