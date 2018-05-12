var db = require('../db');

exports.create = function(usuario,tipo,titulo,fecha,autores,institucion,num_registro) {
  console.log(`${usuario},${tipo},${titulo},${fecha},${autores},${institucion},${num_registro}`);
  var response = db.INSERT(`produccion`,
  `usuario,tipo,titulo,fecha,autores,institucion,num_registro`,
  `\'${usuario}\',\'${tipo}\',\'${titulo}\',\'${fecha}\',\'${autores}\',\'${institucion}\',\'${num_registro}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`produccion`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`produccion`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,tipo,titulo,fecha,autores,institucion,num_registro) {
  console.log(`${id},${tipo},${titulo},${fecha},${autores},${institucion},${num_registro}`);
  var response = db.UPDATE(`produccion`,
  `tipo=\'${tipo}\',titulo=\'${titulo}\',fecha=\'${fecha}\',autores=\'${autores}\',institucion=\'${institucion}\',num_registro=\'${num_registro}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`produccion`, `id=${id}`);
  return response;
}
