var model = require('../models/produccionModel');

exports.create = function(req, res) {
  var response = model.create(req.body.usuario,req.body.tipo,req.body.titulo,req.body.fecha,req.body.autores,req.body.institucion,req.body.num_registro);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.id);
  return response;
};

exports.edit = function(req, res) {
  var response = model.edit(req.params.id,req.body.tipo,req.body.titulo,req.body.fecha,req.body.autores,req.body.institucion,req.body.num_registro);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
