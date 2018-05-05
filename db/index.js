var {Client} = require('pg');
var Router = require('express-promise-router');

var URL = 'postgres://postgres:admin@localhost/academic';

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
