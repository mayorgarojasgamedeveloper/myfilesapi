var model = require('../models/formacionModel');

exports.create = function(req, res) {
  var response = model.create(req.body.usuario,req.body.grado,req.body.nombre,req.body.institucion,req.body.fecha_inicio,req.body.fecha_fin,req.body.fecha_obtencion,req.body.cedula);
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
  var response = model.edit(req.params.id,req.body.grado,req.body.nombre,req.body.institucion,req.body.fecha_inicio,req.body.fecha_fin,req.body.fecha_obtencion,req.body.cedula);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
