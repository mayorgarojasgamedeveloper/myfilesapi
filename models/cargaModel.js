var db = require('../db');

exports.create = function(usuario,nombre,fecha_inicio,fecha_fin,programa,horas_semana) {
  console.log(`${usuario},${nombre},${fecha_inicio},${fecha_fin},${programa},${horas_semana}`);
  var response = db.INSERT(`carga`,
  `usuario,nombre,fecha_inicio,fecha_fin,programa,horas_semana`,
  `\'${usuario}\',\'${nombre}\',\'${fecha_inicio}\',\'${fecha_fin}\',\'${programa}\',\'${horas_semana}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`carga`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`carga`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,fecha_inicio,fecha_fin,programa,horas_semana) {
  console.log(`${id},${nombre},${fecha_inicio},${fecha_fin},${programa},${horas_semana}`);
  var response = db.UPDATE(`carga`,
  `nombre=\'${nombre}\',fecha_inicio=\'${fecha_inicio}\',fecha_fin=\'${fecha_fin}\',programa=\'${programa}\',horas_semana=\'${horas_semana}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`carga`, `id=${id}`);
  return response;
}
