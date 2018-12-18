const db = require('../db/connection.js')

const getAllAccounts = () => db('galvanize_bank').select().from('accounts')

module.exports = {
  getAllAccounts
}
