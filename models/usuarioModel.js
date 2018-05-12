var db = require('../db');

exports.create = function(usuario,contrasena) {
  console.log(`${usuario},${contrasena}`);
  var response = db.INSERT(`usuario`,
  `usuario,contrasena`,
  `\'${usuario}\',\'${contrasena}\'`,
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
exports.editInfo = function(usuario,nombre,apellido,domicilio,ciudad,telefono,correo,nombre_dependiente_1,edad_dependiente_1,nombre_dependiente_2,edad_dependiente_2) {
  console.log(`${usuario},${nombre},${apellido},${domicilio},${ciudad},${telefono},${correo},${nombre_dependiente_1},${edad_dependiente_1},${nombre_dependiente_2},${edad_dependiente_2}`);
  var response = db.UPDATE(`usuario`,
  `nombre=\'${nombre}\',apellido=\'${apellido}\',domicilio=\'${domicilio}\',ciudad=\'${ciudad}\',telefono=\'${telefono}\',correo=\'${correo}\',nombre_dependiente_1=\'${nombre_dependiente_1}\',edad_dependiente_1=\'${edad_dependiente_1}\',nombre_dependiente_2=\'${nombre_dependiente_2}\',edad_dependiente_2=\'${edad_dependiente_2}\'`,
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
