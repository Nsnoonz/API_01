import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import * as appConfig from './app.js'
import responseFormat from '../middlewares/responseFormat.js'
import routes from '../routes/index.js'

const app = express()

const options = { minWorkers: 'max' }
// WorkerCon.init(options)

app.use(compression())
app.use(cors())
app.use(helmet())
app.use(morgan('short'))
app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(responseFormat)
app.use(routes)

// errorHandler(app)

export default app;