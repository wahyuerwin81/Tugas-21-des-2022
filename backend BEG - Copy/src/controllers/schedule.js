const model = require('../models/schedule');
const schedules = {};

schedules.getAll = async (req, res) => {
    try {
      const data = await model.getData();
      res.send(data);
    } catch (error) {
      res.send('Sorry Error Terjadi');
    }
  };

  schedules.Create = async (req, res) => {
    try {
      const body = req.body;
      const tambah = await model.addData(body);
      res.send(body);
    } catch (error) {
      res.send('Maaf error terjadi di ctrls');
    }
  };

  schedules.Update = async (req, res) => {
    try {
      const body = req.body;
      const tambah = await model.updateData(body);
      res.send(body);
    } catch (error) {
      res.send('Maaf error terjadi di ctrls');
    }
  };

  schedules.Delete = async (req, res) => {
    try {
      const body = req.body;
      const tambah = await model.deleteData(body);
      res.send(body);
    } catch (error) {
      res.send('Maaf error terjadi di ctrl');
    }
  };

  module.exports = schedules