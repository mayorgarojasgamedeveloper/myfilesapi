var model = require('../models/cargaModel');

exports.create = function(req, res) {
  var response = model.create(req.body.usuario,req.body.nombre,req.body.fecha_inicio,req.body.fecha_fin,req.body.autores,req.body.programa,req.body.horas_semana);
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
  var response = model.edit(req.params.id,req.body.nombre,req.body.fecha_inicio,req.body.fecha_fin,req.body.autores,req.body.programa,req.body.horas_semana);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
