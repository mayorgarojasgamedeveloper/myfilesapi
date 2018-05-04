var db = require('../db');

exports.create = function(tipo,linea) {
  console.log(`${tipo},${linea}`);
  var response = db.INSERT(`lineainovadora`,
  `tipo,linea`,
  `${tipo},\'${linea}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`lineainovadora`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`lineainovadora`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,linea) {
  console.log(`${id},${linea}`);
  var response = db.UPDATE(`lineainovadora`,
  `linea=\'${linea}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`lineainovadora`, `id=${id}`);
  return response;
}
