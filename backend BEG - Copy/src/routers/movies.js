const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/movies')

routers.get('/', ctrl.getAll)
routers.post('/', ctrl.Create)
routers.put('/:id', ctrl.Update)
routers.delete('/:id', ctrl.Delete)



module.exports = routers