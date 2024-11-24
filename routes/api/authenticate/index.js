import express from 'express'
import authenticate from '../../../controllers/authenticate/v1.0/index.js'

const router = express.Router()
router.post('/v1.0/fnDemo', async (req, res) => { await authenticate.fnDemo(req, res) })
router.post('/v1.0/fnGenerateAccessToken', async (req, res) => { await authenticate.fnGenerateAccessToken(req, res) })
export default router
