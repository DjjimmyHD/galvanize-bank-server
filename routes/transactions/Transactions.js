const express = require('express')
const router = express.Router()
const transactions = require('../../queries/transactions.js')

router.get('/', (req, res, next) => {
  transactions.getAllTransactions()
    .then(transactions => res.json({ transactions }))
    .catch(next)
})

module.exports = router
