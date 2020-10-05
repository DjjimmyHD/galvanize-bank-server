const db = require('../db/connection.js')

const getAllUsers = () => db('galvanize_bank').select().from('users')
const getOneUser = (id) => {
  return db('galvanize_bank')
    .select()
    .from('users')
    .where('id', id)
}

module.exports = {
  getAllUsers,
  getOneUser
}
