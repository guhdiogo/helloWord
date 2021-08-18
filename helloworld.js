const express = require('express')
const app = express()
const port = 666

app.get('/', (req, res) => {
  res.send('Hello World! ou em francês: Bonjour le monde!')
})

app.listen(port, () => {
  console.log(`Executando em http://localhost:${port}`)
})