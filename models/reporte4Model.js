var db = require('../db');

exports.create = function(tipo,nombre,fecha_inicio,fecha_fin,nombre_empresa,nombre_alumno) {
  console.log(`${tipo},${nombre},${fecha_inicio},${fecha_fin},${nombre_empresa},${nombre_alumno}`);
  var response = db.INSERT(`reporte_4`,
  `tipo,nombre,fecha_inicio,fecha_fin,nombre_empresa,nombre_alumno`,
  `${tipo},\'${nombre}\',\'${fecha_inicio}\',\'${fecha_fin}\',\'${nombre_empresa}\',\'${nombre_alumno}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`reporte_4`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`reporte_4`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,fecha_inicio,fecha_fin,nombre_empresa,nombre_alumno) {
  console.log(`${id},${nombre},${fecha_inicio},${fecha_fin},${nombre_empresa},${nombre_alumno}`);
  var response = db.UPDATE(`reporte_4`,
  `nombre=\'${nombre}\',fecha_inicio=\'${fecha_inicio}\',fecha_fin=\'${fecha_fin}\',nombre_empresa=\'${nombre_empresa}\',nombre_alumno=\'${nombre_alumno}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`reporte_4`, `id=${id}`);
  return response;
}
