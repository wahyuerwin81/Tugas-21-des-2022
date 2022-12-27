/* eslint-disable no-undef */
const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

module.exports = pool