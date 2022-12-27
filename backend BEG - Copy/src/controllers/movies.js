const models = require('../models/movies')
const response = require('../helpers/response')
const movies = {}


movies.getAll = async (req, res) => {
    try {
        const result = await models.getData()
        return res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

movies.Create = async (req, res) => {
    try {
        const {title, genre, directed_by, synopsis} = req.body
        const data = await models.addData({title, genre, directed_by, synopsis})
        res.send(data)
    } catch (error) {
        res.send(error)

    }
}

movies.Update = async (req,res) => {
    try {
        const {id} = req.params
        const {title, genre, directed_by, synopsis}= req.body
        const data = await models.updateData(title, genre, directed_by, synopsis,id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

movies.Delete = async (req,res) => {
    try {
        const {id} = req.params
        const data = await models.deleteData(id)
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = movies