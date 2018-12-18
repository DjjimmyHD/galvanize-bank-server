const express = require('express')
const router = express.Router()
const queries = require('../../queries/users.js')

router.get('/', (req, res, next) => {
  queries.getAllUsers().then(users => {
    res.json({ users })
  }).catch(next)
})

module.exports = router
