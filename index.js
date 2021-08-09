const express = require('express')
const scores = require('./scores')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index', { scores })
})

app.all('*', (request, response) => {
  return response.status(404).send('My brain has too many tabs open')
})

app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
