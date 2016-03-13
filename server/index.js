import express from 'express'

const app = express()

// todo: configure stack
app.get('/', (request, response) => {
  response.end('Hello express!')
})

app.listen(3000, () => console.log('http://localhost:3000'))
