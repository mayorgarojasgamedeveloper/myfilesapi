var db = require('../db');

exports.create = function(usuario,tipo,nombre,autores,fecha,linea,subtipo,no_registro) {
  console.log(`${usuario},${tipo},${nombre},${autores},${fecha},${linea},${subtipo},${no_registro}`);
  var response = db.INSERT(`reporte_3`,
  `usuario,tipo,nombre,autores,fecha,linea,subtipo,no_registro`,
  `\'${usuario}\',${tipo},\'${nombre}\',\'${autores}\',\'${fecha}\',\'${linea}\',\'${subtipo}\',\'${no_registro}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`reporte_3`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`reporte_3`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,autores,fecha,linea,no_registro) {
  console.log(`${id},${nombre},${autores},${fecha},${linea},${no_registro}`);
  var response = db.UPDATE(`reporte_3`,
  `nombre=\'${nombre}\',autores=\'${autores}\',fecha=\'${fecha}\',linea=\'${linea}\',no_registro=\'${no_registro}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`reporte_3`, `id=${id}`);
  return response;
}
