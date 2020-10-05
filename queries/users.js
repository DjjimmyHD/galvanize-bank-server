const db = require('../db/connection.js')

const getAllUsers = () => db('galvanize_bank').select().from('users')
const getOneUser = (id) => {
  return db('galvanize_bank')
    .select()
    .from('users')
    .where('id', id)
}
const createUser = (newUser) => {
  return db('users')
    .insert(newUser)
    .returning('*')
}
const updateUser = (id, editUser) => {
  return db('users')
    .returning('*')
    .update(editUser)
    .where('id', id)
}
const deleteUser = (id) => {
  return db('users')
    .where('id', id)
    .del()
}
module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}
