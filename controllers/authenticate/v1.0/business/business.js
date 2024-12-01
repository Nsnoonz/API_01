import { body } from 'express-validator'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import database from '../database/database.js'
import validatorEndpoint from '../../../../middlewares/validatorResult.js'
import generatoken from '../../../../middlewares/generatoken.js'

const fnHashData = (txt) => {
  const plaintext = `${txt}Nsnoonz2024`
  const hash = crypto.createHash('sha256').update(plaintext).digest('hex')
  return hash
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.Mail_User,
    pass: process.env.Mail_PASS,
  },
});
const Business = {
  async bfnDemo(req, res) {
    try {
      const result = database.dbfnDemo()
      return result
    } catch (error) {
      throw error
    }
  },
  async bfnGenerateAccessToken(req, res) {
    try {
      await body('username').notEmpty().run(req)
      await body('password').notEmpty().run(req)
      validatorEndpoint(req, res)
      if (req.body.username === process.env.Dev_USER && req.body.password === process.env.Dev_Pass) {
        return generatoken(req.body.username)
      } else {
        const err = Object.assign(new Error('Data Unauthorized'), { status: 401 })
        throw err
      }
    } catch (error) {
      throw error
    }
  }
}

export default Business