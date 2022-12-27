require('dotenv').config()
const express = require('express')
const route = require('./src/routers/index')
const db = require('./src/configs/db')
const cors = require('cors')


const server = express()
const PORT = process.env.APP_PORT

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(cors())
server.use(route)

db.connect().then (() => {
    console.log('Data base connected')

    server.listen(PORT, () => {
        console.log(`Service run on port: ${PORT}`)
    })
}).catch(er => {
    console.log(er);
})