const db = require('../db/connection.js')

const getAllUsers = () => db('galvanize_bank').select().from('users')

module.exports = {
  getAllUsers
}
