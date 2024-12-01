import business from './business/business.js'

const Main = {
  async fnDemo(req, res) {
    try {
      const result =  /* await business.bfnDemo(req, res) */
        result = {
          Dev_USER: process.env.Dev_USER,
          Dev_PASS: process.env.Dev_PASS
        }
      res.success(result)
    } catch (error) {
      res.error(error.message, error.status)
    }
  },
  async fnGenerateAccessToken(req, res) {
    try {
      const result = await business.bfnGenerateAccessToken(req, res)
      res.success(result)
    } catch (error) {
      res.error(error.message, error.status)
    }
  }
}

export default Main
