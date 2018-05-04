var db = require('../db');

exports.create = function(tipo,nombre,autores,fecha,linea,subtipo,dependencia) {
  console.log(`${tipo},${nombre},${autores},${fecha},${linea},${subtipo},${dependencia}`);
  var response = db.INSERT(`informetecnico`,
  `tipo,nombre,autores,fecha,linea,subtipo,dependencia`,
  `${tipo},\'${nombre}\',\'${autores}\',\'${fecha}\',\'${linea}\',\'${subtipo}\',\'${dependencia}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`informetecnico`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`informetecnico`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,autores,fecha,linea,dependencia) {
  console.log(`${id},${nombre},${autores},${fecha},${linea},${dependencia}`);
  var response = db.UPDATE(`informetecnico`,
  `nombre=\'${nombre}\',autores=\'${autores}\',fecha=\'${fecha}\',linea=\'${linea}\',dependencia=\'${dependencia}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`informetecnico`, `id=${id}`);
  return response;
}
