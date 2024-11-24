import dbConn from '../../../../configs/database.js'

const Database = {
  async dbfnDemo(inputParams) {
    try { 
      const query = {}
      query.header = {'system': 'Demo', 'description': 'Demo Query', 'createdate': '2023-01-11', 'updatedate': '2023-01-11', 'contactname': 'Nopphadol'}
      query.sql = `
      SELECT * FROM admin WHERE 1
      `
      //let result = await dbConn.myExec(query)
      const result = [{'status': 'success'}]
      return result
    } catch (error) {
      throw error
    }
  }
}

export default Database