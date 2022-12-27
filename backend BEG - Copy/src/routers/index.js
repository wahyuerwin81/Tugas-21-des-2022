const express = require('express')
const routers = express.Router()
const schedules = require('./schedule')


const movie = require('../routers/movies')
    routers.use('/movie', movie)
const schedule = require('../routers/schedule')
    routers.use('/schedules',schedules)




module.exports = routers;