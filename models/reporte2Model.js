var db = require('../db');

exports.create = function(usuario,tipo,nombre,autores,fecha,linea,subtipo,isbn,nom_libro) {
  console.log(`${usuario},${tipo},${nombre},${autores},${fecha},${linea},${subtipo},${isbn},${nom_libro}`);
  var response = db.INSERT(`reporte_2`,
  `usuario,tipo,nombre,autores,fecha,linea,subtipo,isbn,nom_libro`,
  `\'${usuario}\',${tipo},\'${nombre}\',\'${autores}\',\'${fecha}\',\'${linea}\',\'${subtipo}\',\'${isbn}\',\'${nom_libro}\'`,
  `*`);
  return response;
}
exports.list = function() {
  var response = db.SELECT(`reporte_2`);
  return response;
}
exports.view = function(id) {
  console.log(`${id}`);
  var response = db.SELECT(`reporte_2`, `*`, `id=${id}`);
  return response;
}
exports.edit = function(id,nombre,autores,fecha,linea,isbn,nom_libro) {
  console.log(`${id},${nombre},${autores},${fecha},${linea},${isbn},${nom_libro}`);
  var response = db.UPDATE(`reporte_2`,
  `nombre=\'${nombre}\',autores=\'${autores}\',fecha=\'${fecha}\',linea=\'${linea}\',isbn=\'${isbn}\',nom_libro=\'${nom_libro}\'`,
  `id=${id}`,
  `*`);
  return response;
}
exports.delete = function(id) {
  console.log(`${id}`);
  var response = db.DELETE(`reporte_2`, `id=${id}`);
  return response;
}
