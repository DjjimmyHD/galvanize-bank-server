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
router.put('/:id', (req, res, next) => {
  users.updateUser(req.params.id, req.body).then(users => {
    res.json({ users })
  })
})
router.delete('/:id', (req, res, next) => {
  users.deleteUser(req.params.id).then(users => {
    res.json({ users })
  })
})

router.post('/', (req, res, next) => {
  users.createUser(req.body).then(users => {
    res.json({ users })
  })
})

module.exports = router
