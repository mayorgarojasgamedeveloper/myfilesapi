var db = require('../db');

exports.create = function(tipo,nombre,fecha_inicio,fecha_fin,colaboradores,instituciones) {
  console.log(`${tipo},${nombre},${fecha_inicio},${fecha_fin},${colaboradores},${instituciones}`);
  var response = db.INSERT(`proyecto`,
  `tipo,nombre,fecha_inicio,fecha_fin,colaboradores,instituciones`,
  `${tipo},\'${nombre}\',\'${fecha_inicio}\',\'${fecha_fin}\',\'${colaboradores}\',\'${instituciones}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`proyecto`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`proyecto`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,fecha_inicio,fecha_fin,colaboradores,instituciones) {
  console.log(`${id},${nombre},${fecha_inicio},${fecha_fin},${colaboradores},${instituciones}`);
  var response = db.UPDATE(`proyecto`,
  `nombre=\'${nombre}\',fecha_inicio=\'${fecha_inicio}\',fecha_fin=\'${fecha_fin}\',colaboradores=\'${colaboradores}\',instituciones=\'${instituciones}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`proyecto`, `id=${id}`);
  return response;
}
