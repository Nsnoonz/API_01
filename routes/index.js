import express from 'express'
import api from './api/index.js'


import * as appConfig from '../configs/app.js'

const router = express.Router()

router.get('/api/hello', (req, res) => {
  res.success('Hello World!')
})

router.use('/api', api)

export default router
