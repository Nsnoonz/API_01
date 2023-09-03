import express from 'express'

import beautycenter from './beautycenter/index.js'

const router = express.Router()

router.use('/beautycenter', beautycenter)
export default router