const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/schedule');

routers.get('/show', ctrl.getAll)
routers.post('/add', ctrl.Create)
routers.put('/update', ctrl.Update)
routers.delete('/delete', ctrl.Delete)

module.exports = routers;