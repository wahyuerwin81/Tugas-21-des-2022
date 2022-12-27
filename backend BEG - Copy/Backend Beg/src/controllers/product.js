const ctrl={}
const models = require('../models/product')

ctrl.getData = () => {
    const result = models.getAll()
    result.send(result)
  
}

module.exports = ctrl

// ctrl.getData = () => {
//     return models.getAll()