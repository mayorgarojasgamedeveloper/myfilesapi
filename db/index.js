var {Client} = require('pg');
var Router = require('express-promise-router');

var URL = 'postgres://postgres:admin@127.0.0.1/myfiles';

var client = new Client(URL);

client.connect((err) => {
  if(err)
    console.error(err);
  else
    console.log('Database Started');
});

exports.INSERT = async function(table_name, columns, values, returning = null) {

  var sql = ``;
  sql += `INSERT INTO ${table_name} (${columns})`;
  sql += ` VALUES (${values})`;
  if(returning !== null)
    sql += ` RETURNING ${returning}`;

  const query = client.query(sql);
  return query;
}

exports.SELECT = async function(table_name, columns = '*', condition = null) {

  var sql = ``;
  sql += `SELECT ${columns}`;
  sql += ` FROM ${table_name}`;
  if(condition !== null)
    sql += ` WHERE ${condition}`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.UPDATE = async function(table_name, setters, condition, returning = null) {

  var sql = ``;
  sql += `UPDATE ${table_name}`;
  sql += ` SET ${setters}`;
  sql += ` WHERE ${condition}`;
  if(returning !== null)
    sql += ` RETURNING ${returning}`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.DELETE = async function(table_name, condition) {

  var sql = ``;
  sql += `DELETE FROM ${table_name}`;
  sql += ` WHERE ${condition}`;
  const { rows } = await client.query(sql);
  return rows;
}

exports.NOW = async function() {

  var sql = `SELECT NOW()`;
  const { rows } = await client.query(sql);
  console.log(rows);
  return rows;
}

exports.SQL = async function(sql) {

  const { rows } = await client.query(sql);
  console.log(rows);
  return rows;
}

exports.SELECTPRODUCCION = async function() {

  var sql = ``;
  sql += `select id, usuario, linea, fecha, nombre, subtipo from reporte_1`;
  sql += ` union`;
  sql += ` select id, usuario, linea, fecha, nombre, subtipo from reporte_2`;
  sql += ` union`;
  sql += ` select id, usuario, linea, fecha, nombre, subtipo from reporte_3`;
  sql += ` union`;
  sql += ` select id, usuario, linea, fecha, nombre, subtipo from informetecnico;`;

  const { rows } = await client.query(sql);
  return rows;
}

exports.ESTADISTICAS = async function() {

  var sql = ``;
sql += `   SELECT`;
  sql += ` (SELECT count(*) FROM lineainovadora WHERE tipo=1) as linea,`;
  sql += ` (`;
      sql += ` select count(distinct informetecnico.id)+count(distinct reporte_1.id)+`;
      sql += ` count(distinct reporte_2.id)+count(distinct reporte_3.id) as count_t4`;
      sql += ` from informetecnico, reporte_1, reporte_2, reporte_3`;
  sql += ` ) as produccion,`;
  sql += ` (SELECT count(*) FROM proyecto WHERE tipo=3) as proyecto,`;
  sql += ` (SELECT count(*) FROM reporte_4 WHERE tipo=4) as direccion,`;
  sql += ` (SELECT count(*) FROM reporte_4 WHERE tipo=5) as estadia`;

  const { rows } = await client.query(sql);
  return rows;
}
