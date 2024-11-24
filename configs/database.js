import mysql from 'mysql'
import util from 'util'

const dbConn = {
	port: process.env.DB_PORT,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.MYSQL_DB,
	connectionLimit: 1000000
}
console.log(dbConn)
const dbConnect = {
	async myExec(query) {
    let result
		try {
			if (typeof query !== 'object' || query === null) {
				throw Error('Query is not prepared')
			} else {
				const queryHeader = query.header
				const preparedQuery = query.sql

				const connection = mysql.createConnection(dbConn)
				const exec = util.promisify(connection.query).bind(connection)

				try {
					result = await exec(preparedQuery)
				} catch (error) {
					throw error
				} finally {
					connection.end()
				}
			}
		} catch (error) {
			throw error
		}
		return result
  }
}


export default dbConnect