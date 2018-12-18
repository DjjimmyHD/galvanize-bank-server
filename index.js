const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const port = process.env.PORT || 3000
const users = require('./routes/users/Users.js')
const accounts = require('./routes/accounts/Accounts.js')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(serveStatic('public', { 'main': ['main.css', 'main.css'] }))

app.use('/users', users)
app.use('/accounts', accounts)

app.get('*', (req, res, next) => {
  res.sendFile('404.html', {
    root: '/Users/james.schultz/block-three/galvanizeBankBE/public/'
  })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`got you on ${port}`)
})
