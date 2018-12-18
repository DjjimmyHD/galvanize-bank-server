const config = require('../knexfile.js')
const environment = process.env.NODE_ENV || 'development'
const db = require('knex')(config[environment])

module.exports = db
