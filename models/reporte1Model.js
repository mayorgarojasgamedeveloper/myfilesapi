var db = require('../db');

exports.create = function(usuario,tipo,nombre,autores,fecha,linea,subtipo,issn,nom_revista) {
  console.log(`${usuario},${tipo},${nombre},${autores},${fecha},${linea},${subtipo},${issn},${nom_revista}`);
  var response = db.INSERT(`reporte_1`,
  `usuario,tipo,nombre,autores,fecha,linea,subtipo,issn,nom_revista`,
  `\'${usuario}\',${tipo},\'${nombre}\',\'${autores}\',\'${fecha}\',\'${linea}\',\'${subtipo}\',\'${issn}\',\'${nom_revista}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`reporte_1`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`reporte_1`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,autores,fecha,linea,issn,nom_revista) {
  console.log(`${id},${nombre},${autores},${fecha},${linea},${issn},${nom_revista}`);
  var response = db.UPDATE(`reporte_1`,
  `nombre=\'${nombre}\',autores=\'${autores}\',fecha=\'${fecha}\',linea=\'${linea}\',issn=\'${issn}\',nom_revista=\'${nom_revista}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`reporte_1`, `id=${id}`);
  return response;
}

exports.produccion = function() {
  var response = db.SELECTPRODUCCION();
  return response;
}
