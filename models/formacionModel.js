var db = require('../db');

exports.create = function(usuario,grado,nombre,institucion,fecha_inicio,fecha_fin,fecha_obtencion,cedula) {
  console.log(`${usuario},${grado},${nombre},${institucion},${fecha_inicio},${fecha_fin},${fecha_obtencion},${cedula}`);
  var response = db.INSERT(`formacion`,
  `usuario,grado,nombre,institucion,fecha_inicio,fecha_fin,fecha_obtencion,cedula`,
  `\'${usuario}\',\'${grado}\',\'${nombre}\',\'${institucion}\',\'${fecha_inicio}\',\'${fecha_fin}\',\'${fecha_obtencion}\',\'${cedula}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`formacion`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`formacion`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,grado,nombre,institucion,fecha_inicio,fecha_fin,fecha_obtencion,cedula) {
  console.log(`${id},${grado},${nombre},${institucion},${fecha_inicio},${fecha_fin},${fecha_obtencion},${cedula}`);
  var response = db.UPDATE(`formacion`,
  `grado=\'${grado}\',nombre=\'${nombre}\',institucion=\'${institucion}\',fecha_inicio=\'${fecha_inicio}\',fecha_fin=\'${fecha_fin}\',fecha_obtencion=\'${fecha_obtencion}\',cedula=\'${cedula}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`formacion`, `id=${id}`);
  return response;
}
