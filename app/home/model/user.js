'use strict';
/**
 * model
 */var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];exports.__esModule = true;var _default = (function (_think$model$base) {_inherits(_default, _think$model$base);function _default() {_classCallCheck(this, _default);_think$model$base.apply(this, arguments);}_default.prototype.

  tableTest = function tableTest() {
    return this.table('user', true).select();};_default.prototype.

  unionTest = function unionTest() {
    return this.union('SELECT * FROM think_pic2').select();};_default.prototype.

  union2Test = function union2Test() {
    return this.union({ table: "think_pic2" }, true).select();};_default.prototype.

  joinTest = function joinTest() {
    return this.join("think_cate ON think_group.cate_id=think_cate.id").select();};_default.prototype.

  join2Test = function join2Test() {
    return this.join([
    "think_cate ON think_group.cate_id=think_cate.id", 
    "RIGHT JOIN think_tag ON think_group.tag_id=think_tag.id"]).
    select();};_default.prototype.

  join3Test = function join3Test() {
    return this.join({ 
      table: 'cate', 
      join: 'inner', //join 方式，有 left, right, inner 3 种方式
      as: 'c', // 表别名
      on: ['cate_id', 'id'] //ON 条件
    }).select();};_default.prototype.

  join4Test = function join4Test() {
    return this.alias('a').join({ 
      table: 'cate', 
      join: 'left', 
      as: 'c', 
      on: ['cate_id', 'id'] }).
    join({ 
      table: 'group_tag', 
      join: 'left', 
      as: 'd', 
      on: ['id', 'group_id'] }).
    select();};_default.prototype.

  join5Test = function join5Test() {
    return this.alias('a').join({ 
      cate: { 
        join: 'left', // 有 left,right,inner 3 个值
        as: 'c', 
        on: ['id', 'id'] }, 

      group_tag: { 
        join: 'left', 
        as: 'd', 
        on: ['id', 'group_id'] } }).

    select();};_default.prototype.

  join6Test = function join6Test() {
    return this.join({ 
      cate: { 
        on: ['id', 'id'] }, 

      group_tag: { 
        on: ['id', 'group_id'] } }).

    select();};_default.prototype.

  join7Test = function join7Test() {
    return this.join({ 
      cate: { on: 'id, id' }, 
      group_tag: { on: ['id', 'group_id'] }, 
      tag: { 
        on: { // 多个字段的 ON
          id: 'id', 
          title: 'name' } } }).


    select();};_default.prototype.

  join8Test = function join8Test() {var 
    sql;return _regeneratorRuntime.async(function join8Test$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('group').buildSql());case 2:sql = context$2$0.sent;return context$2$0.abrupt('return', 
          this.join({ 
            table: sql, 
            on: ['gid', 'id'] }).
          select());case 4:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.

  order1Test = function order1Test() {
    return this.order("id DESC, name ASC").select();};_default.prototype.

  order2Test = function order2Test() {
    return this.order(['id DESC', 'name ASC']).select();};_default.prototype.

  order3Test = function order3Test() {
    return this.order({ 
      id: 'DESC', 
      name: 'ASC' }).
    select();};_default.prototype.

  havingTest = function havingTest() {
    return this.having('view_nums> 1000 AND view_nums <2000').select();};_default.prototype.

  groupTest = function groupTest() {
    return this.group('name').select();};_default.prototype.

  distinctTest = function distinctTest() {
    return this.distinct('name').select();};_default.prototype.

  where1Test = function where1Test() {
    return this.where().select();};_default.prototype.

  where2Test = function where2Test() {
    return this.where({ id: 10 }).select();};_default.prototype.

  where3Test = function where3Test() {
    return this.where('id = 10 OR id < 2').select();};_default.prototype.

  where4Test = function where4Test() {
    return this.where({ id: ['!=', 10] }).select();};_default.prototype.

  where5Test = function where5Test() {
    return this.where({ name: ['EXP', "='name'"] }).select();};_default.prototype.

  where6Test = function where6Test() {
    return this.where({ title: ['NOTLIKE', 'welefen'] }).select();};_default.prototype.

  where7Test = function where7Test() {
    return this.where({ title: ['like', '%welefen%'] }).select();};_default.prototype.

  where8Test = function where8Test() {
    return this.where({ title: ['like', ['welefen', 'suredy']] }).select();};_default.prototype.

  where9Test = function where9Test() {
    return this.where({ 'title|content': ['like', '%welefen%'] }).select();};_default.prototype.

  where10Test = function where10Test() {
    return this.where({ id: ['IN', '10,20'] }).select();};_default.prototype.

  where11Test = function where11Test() {
    return this.where({ id: ['IN', [10, 20]] }).select();};_default.prototype.

  where12Test = function where12Test() {
    return this.where({ id: ['BETWEEN', 1, 2] }).select();};_default.prototype.

  where13Test = function where13Test() {
    return this.where({ id: ['between', '1,2'] }).select();};_default.prototype.

  where14Test = function where14Test() {
    return this.where({ id: 10, title: "www" }).select();};_default.prototype.

  where15Test = function where15Test() {
    return this.where({ id: { '>': 10, '<': 20 } }).select();};_default.prototype.

  where16Test = function where16Test() {
    return this.where({ id: { '<': 10, '>': 20, _logic: 'OR' } }).select();};_default.prototype.

  where17Test = function where17Test() {
    return this.where({ 
      title: 'test', 
      _complex: { id: ['IN', [1, 2, 3]], 
        content: 'www', 
        _logic: 'or' } }).

    select();};_default.prototype.

  where18Test = function where18Test() {
    return this.where({ id: [10, 20, 30, 'OR'] }).select();};_default.prototype.

  where19Test = function where19Test() {
    return this.where({ id: { IN: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] } }).select();};return _default;})(think.model.base);exports['default'] = _default;module.exports = exports['default'];