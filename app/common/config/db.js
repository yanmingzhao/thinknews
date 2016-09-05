'use strict';
/**
 * db config
 * @type {Object}
 */exports.__esModule = true;exports['default'] = 
{ 
  type: 'mysql', 
  host: '127.0.0.1', 
  port: '', 
  database: 'think_demo', 
  user: 'root', 
  pwd: '', 
  prefix: 'think_', 
  encoding: 'utf8', 
  nums_per_page: 10, 
  log_sql: true, 
  log_connect: true, 
  //connectionLimit: 10,
  cache: { 
    on: true, 
    type: '', 
    timeout: 3600 } };module.exports = exports['default'];