var model = require('../models/logModel');

exports.create = function(req, res) {
  var response = model.create(req.body.ip,req.body.accion,req.body.fecha);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
