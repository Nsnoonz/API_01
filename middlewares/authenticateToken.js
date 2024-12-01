import jwt from 'jsonwebtoken'
import errorHelper from '../middlewares/errorHandler.js'
const authenticateToken = (req, res, next) => {
  const ip = (req.headers['x-client-wp'] || '') || req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const auth = (req.headers.authorization ? req.headers.authorization : (req.headers.Authorization ? req.headers.Authorization : null))
  const authHeader = auth ? auth.split(' ')[0] : null
  const authToken = auth ? auth.split(' ')[1] : null
  if (authToken == null) {
    const err = new Error('Missing access token')
    err.status = 401
    delete err.stack
    next(err)
  } else if (authHeader !== process.env.TOKEN_PREFIX) {
    const err = new Error('Unauthorized')
    err.status = 401
    delete err.stack
    next(err)
  } else {
    jwt.verify(authToken, process.env.TOKEN_SECRET, (error = '') => {
      if (error) {
        const decodetokens = jwt.decode(authToken)
        if (decodetokens == null) {
          const err = new Error('Unauthorized')
          err.status = 401
          delete err.stack
          next(err)
        } else {
          const currentDateTime = new Date(0)
          currentDateTime.setUTCSeconds(decodetokens.exp)
          if (currentDateTime.valueOf() < new Date().valueOf()) {
            const err = new Error('Token Expired')
            err.status = 401
            delete err.stack
            next(err)
          }
        }
      } else {
        next()
      }
    })
  }
}

const authenticateToken2 = (req, res, next) => {
  const ip = (req.headers['x-client-wp'] || '') || req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const authHeader = (req.headers.authorization ? req.headers.authorization : (req.headers.Authorization ? req.headers.Authorization : null))
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) {
    next(errorHelper.createError('Missing access token', 401))
  } else {
    jwt.verify(token, process.env.TOKEN_SECRET, (error = '') => {
      if (error) {
        //next(errorHelper.createError('Unauthorized', 401))
        const err = Object.assign(new Error('Data Unauthorized'), { status: 401 })
        throw err
      } else {
        const decodetokens = jwt.decode(token)
        const currentDateTime = new Date(0)
        currentDateTime.setUTCSeconds(decodetokens.exp)
        if (currentDateTime.valueOf() < new Date().valueOf()) {
          //next(errorHelper.createError('Token Expired', 401))
          const err = Object.assign(new Error('Data Unauthorized'), { status: 401 })
          throw err
        } else {
          //next()
          const err = Object.assign(new Error('Data Unauthorized'), { status: 401 })
          throw err
        }
      }
    })
  }

}



export default authenticateToken
