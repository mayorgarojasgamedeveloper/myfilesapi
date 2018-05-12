var model = require('../models/usuarioModel');

exports.create = function(req, res) {
  var response = model.create(req.body.usuario,req.body.contrasena);
  return response;
};

exports.list = function(req, res) {
  var response = model.list();
  return response;
};

exports.view = function(req, res) {
  var response = model.view(req.params.usuario);
  return response;
};

exports.find = function(req, res) {
  var response = model.find(req.params.usuario, req.params.contrasena);
  return response;
};

exports.editInfo = function(req, res) {
  var response = model.editInfo(req.params.usuario, req.body.nombre,req.body.apellido,req.body.domicilio,req.body.ciudad,req.body.telefono,req.body.correo,req.body.nombre_dependiente_1,req.body.edad_dependiente_1,req.body.nombre_dependiente_2,req.body.edad_dependiente_2);
  return response;
};

exports.editFoto = function(req, res) {
  var response = model.editFoto(req.params.usuario,req.file.filename);
  return response;
};

exports.editContrasena = function(req, res) {
  var response = model.editContrasena(req.params.usuario,req.body.contrasena);
  return response;
};

exports.delete = function(req, res) {
  var response = model.delete(req.body.usuario);
  return response;
};
