import express from 'express'
import beautycenter from '../../../controllers/beautycenter/v1.0/index.js'

const router = express.Router()
router.post('/v1.0/fnDemo', async (req, res) => { await beautycenter.fnDemo(req, res) })

export default router
