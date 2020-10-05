const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const users = require('./routes/users/Users.js')
const accounts = require('./routes/accounts/Accounts.js')
const transactions = require('./routes/transactions/Transactions.js')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', users)
app.use('/accounts', accounts)
app.use('/transactions', transactions)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`got you on ${port}`)
})
