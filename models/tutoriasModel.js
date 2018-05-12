var db = require('../db');

exports.create = function(usuario,nombre_alumno,fecha_inicio,fecha_fin,horas_semana) {
  console.log(`${usuario},${nombre_alumno},${fecha_inicio},${fecha_fin},${horas_semana}`);
  var response = db.INSERT(`tutorias`,
  `usuario,nombre_alumno,fecha_inicio,fecha_fin,horas_semana`,
  `\'${usuario}\',\'${nombre_alumno}\',\'${fecha_inicio}\',\'${fecha_fin}\',${horas_semana}`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`tutorias`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`tutorias`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre_alumno,fecha_inicio,fecha_fin,horas_semana) {
  console.log(`${id},${nombre_alumno},${fecha_inicio},${fecha_fin},${horas_semana}`);
  var response = db.UPDATE(`tutorias`,
  `nombre_alumno=\'${nombre_alumno}\',fecha_inicio=\'${fecha_inicio}\',fecha_fin=\'${fecha_fin}\',horas_semana=${horas_semana}`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`tutorias`, `id=${id}`);
  return response;
}
