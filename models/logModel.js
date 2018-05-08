var db = require('../db');

exports.create = function(ip,accion,fecha) {
  console.log(`${ip},${accion},${fecha}`);
  var response = db.INSERT(`log`,
  `ip,accion,fecha`,
  `\'${ip}\',\'${accion}\',\'${fecha}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`log ORDER BY id DESC`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`log`, `id=${id}`);
  return response;
}
