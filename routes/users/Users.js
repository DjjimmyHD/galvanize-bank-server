const express = require('express')
const router = express.Router()
const users = require('../../queries/users.js')

router.get('/', (req, res, next) => {
  users.getAllUsers()
    .then(users => res.json({ users }))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  users.getOneUser(req.params.id).then(users => {
    res.json({ users })
  })
})

module.exports = router
