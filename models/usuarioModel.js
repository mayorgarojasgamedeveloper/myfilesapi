var db = require('../db');

exports.create = function(usuario,contrasena,permisos) {
  console.log(`${usuario},${contrasena},${permisos}`);
  var response = db.INSERT(`usuario`,
  `usuario,contrasena,permisos`,
  `\'${usuario}\',\'${contrasena}\',\'${permisos}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`usuario`);
  return response;
}
exports.view = function(usuario) {
  console.log(`${usuario}`);
  var response = db.SELECT(`usuario`, `*`, `usuario=\'${usuario}\'`);
  return response;
}
exports.find = function(usuario, contrasena) {
  console.log(`${usuario},${contrasena}`);
  var response = db.SELECT(`usuario`, `*`, `usuario=\'${usuario}\' AND contrasena=\'${contrasena}\'`);
  return response;
}
exports.editInfo = function(usuario,nombre,apellidoP,apellidoM,correo,curriculum) {
  console.log(`${usuario},${nombre},${apellidoP},${apellidoM},${correo},${curriculum}`);
  var response = db.UPDATE(`usuario`,
  `nombre=\'${nombre}\',apellidoP=\'${apellidoP}\',apellidoM=\'${apellidoM}\',correo=\'${correo}\',curriculum=\'${curriculum}\'`,
  `usuario=\'${usuario}\'`,
  `*`);
  return response;
}
exports.editFoto = function(usuario,foto) {
  console.log(`${usuario},${foto}`);
  var response = db.UPDATE(`usuario`,
  `foto=\'${foto}\'`,
  `usuario=\'${usuario}\'`,
  `*`);
  return response;
}
exports.editContrasena = function(usuario,contrasena) {
  console.log(`${usuario},${contrasena}`);
  var response = db.UPDATE(`usuario`,
  `contrasena=\'${contrasena}\'`,
  `usuario=\'${usuario}\'`,
  `*`);
  return response;
}
exports.delete = function(usuario) {
  console.log(`${usuario}`);
  var response = db.DELETE(`usuario`, `usuario=\'${usuario}\'`);
  return response;
}
