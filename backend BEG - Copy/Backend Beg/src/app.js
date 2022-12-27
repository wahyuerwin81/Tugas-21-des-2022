const { response } = require('express')
const express = require('express')
const { request } = require('http')
const server = express()
const PORT = 3030

server.get('/', (request, response) => {
    response.send('app running')
})
//req parameter(params)
  
server.get('/hello/:names', (request, response) => {
    const name = request.params.names
    response.send(`Hello ${names}`)
})
// req query
server.get('/search/:names', (request, response) => {
    const qr = request.query
    response.send(qr)
})
server.listen(PORT,  () => {
    console.log(`app running on port ${PORT}`);
})

// http://localhost:3030/search/names?id=1&title=spiderman&relase_date=20-20-2022