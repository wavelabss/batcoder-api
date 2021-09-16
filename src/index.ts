import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Wave Labs'})
})

app.listen(3333)
