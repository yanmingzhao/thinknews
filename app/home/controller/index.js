'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  indexAction = function indexAction(self) {return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:return context$2$0.abrupt('return', 
          self.display());case 1:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.

  addlistAction = function addlistAction(self) {return _regeneratorRuntime.async(function addlistAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:return context$2$0.abrupt('return', 
          self.display());case 1:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.


  adddataAction = function adddataAction() {var 
    data;return _regeneratorRuntime.async(function adddataAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:data = this.get();
          console.log(data);case 2:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.


  addnewtypeAction = function addnewtypeAction(self) {return _regeneratorRuntime.async(function addnewtypeAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:return context$2$0.abrupt('return', 
          self.display());case 1:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.


  newdataAction = function newdataAction() {var 

    data;return _regeneratorRuntime.async(function newdataAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('newtype').select());case 2:data = context$2$0.sent;

          this.success(data);case 4:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.


  addAction = function addAction() {var 
    data, 




    result;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:data = { name: 'welefen' + Math.random(), email: 'admin@thinkjs.org', title: Math.random() };context$2$0.next = 3;return _regeneratorRuntime.awrap(this.model('user').add(data));case 3:result = context$2$0.sent;
          this.success(result);case 5:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.

  findAction = function findAction() {var 
    data;return _regeneratorRuntime.async(function findAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('user').where({ id: 1 }).find());case 2:data = context$2$0.sent;
          this.success(data);case 4:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.

  countSelectAction = function countSelectAction() {var 
    data;return _regeneratorRuntime.async(function countSelectAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('user').page(100, 3).countSelect(false));case 2:data = context$2$0.sent;
          this.success(data);case 4:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.

  testAction = function testAction() {
    var model = this.model('user');
    model.where19Test();
    this.success();};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];