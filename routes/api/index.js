import express from 'express'

import beautycenter from './beautycenter/index.js'
import profile from './profile/index.js'
import authenticate from './authenticate/index.js'

const router = express.Router()

router.use('/beautycenter', beautycenter)
router.use('/profile', profile)
router.use('/authenticate', authenticate)
export default router