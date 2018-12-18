const db = require('../db/connection.js')

const getAllTransactions = () => db('galvanize_bank').select().from('transactions')

module.exports = {
  getAllTransactions
}
