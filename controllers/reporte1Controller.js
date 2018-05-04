var model = require('../models/reporte1Model');

exports.create = function(req, res) {
  var response = model.create(req.body.tipo,req.body.nombre,req.body.autores,req.body.fecha,req.body.linea,req.body.subtipo,req.body.issn,req.body.nom_revista);
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
  var response = model.edit(req.params.id,req.body.nombre,req.body.autores,req.body.fecha,req.body.linea,req.body.issn,req.body.nom_revista);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.id);
  return response;
};
