import express from 'express'
import profile from '../../../controllers/profile/v1.0/index.js'
import authenticateToken from '../../../middlewares/authenticateToken.js'

const router = express.Router()
router.post('/v1.0/fnDemo', async (req, res) => { await profile.fnDemo(req, res) })
router.post('/v1.0/fnSendmail', authenticateToken,  async (req, res) => { await profile.fnSendmail(req, res) })
export default router
