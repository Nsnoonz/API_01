import database from '../database/database.js'

const Business = {
  async bfnDemo(req, res) {
    try {
      const result = database.dbfnDemo()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default Business