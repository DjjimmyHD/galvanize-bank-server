const express = require('express')
const router = express.Router()
const accounts = require('../../queries/accounts.js')

router.get('/', (req, res, next) => {
  accounts.getAllAccounts()
    .then(accounts => res.json({ accounts }))
    .catch(next)
})
module.exports = router
