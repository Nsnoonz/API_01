import { body } from 'express-validator'
import nodemailer from 'nodemailer'
import database from '../database/database.js'
import validatorEndpoint from '../../../../middlewares/validatorResult.js'
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.Mail_User,
    pass: process.env.Mail_PASS,
  },
});

const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const Business = {
  async bfnDemo(req, res) {
    try {
      const result = database.dbfnDemo()
      return result
    } catch (error) {
      throw error
    }
  },
  async bfnSendmail(req, res) {
    try {
      await body('mailname').notEmpty().run(req)
      await body('mailsender').notEmpty().run(req)
      await body('mailmessage').notEmpty().run(req)
      validatorEndpoint(req, res)
      const mailOptions = {
        from: `${req.body.mailname}`,
        to: process.env.Dev_Email,
        subject: `Email From react-nsnoonz-dev : ${req.body.mailname} <${req.body.mailsender}>`,
        text: '',
        html: req.body.mailmessage,
      };
      // const result = await transporter.sendMail(mailOptions, (error, info) => {
      const result = await sendEmail(mailOptions, (error, info) => {
        if (error) {
          return false
        } else {
          return true
        }
      });
    } catch (error) {
      throw error
    }
  }
}

export default Business