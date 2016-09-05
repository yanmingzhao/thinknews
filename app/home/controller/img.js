'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(



'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var fs = require('fs');var path = require('path');var sizeOf = require('image-size');var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}

	/**
  * index action
  * @return {Promise} []
  */_default.prototype.
	indexAction = function indexAction(self) {return _regeneratorRuntime.async(function indexAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:return context$2$0.abrupt('return', 
					self.display());case 1:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.

	addAction = function addAction() {var 

		post, 


		file, 
		filepath, 
		basename, 
		data, 
		getsize, 

		qiniu, 
		instance, 
		uppic, 









		success;return _regeneratorRuntime.async(function addAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:post = this.post();file = think.extend({}, this.file('file'));filepath = file.path;basename = path.basename(filepath);data = undefined;getsize = sizeOf(filepath);qiniu = think.service("qiniu");instance = new qiniu();context$2$0.next = 10;return _regeneratorRuntime.awrap(instance.uploadpic(filepath, basename));case 10:uppic = context$2$0.sent;if (think.isEmpty(uppic)) {context$2$0.next = 17;break;}data = { src: 'http://7xt80d.com1.z0.glb.clouddn.com/' + basename, width: getsize.width, height: getsize.height, title: post.name, detail: '小码哥H5前端培训' };context$2$0.next = 15;return _regeneratorRuntime.awrap(this.model('img').add(data));case 15:success = context$2$0.sent;
					this.json(success);case 17:case 'end':return context$2$0.stop();}}, null, this);};

	/*		let getsize = sizeOf(file.path);
 		
 		//文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
 		let uploadPath = think.RESOURCE_PATH + '/static/upload';
 		think.mkdir(uploadPath);
 		let basename = (+new Date()) + post.name;
 		fs.renameSync(filepath, uploadPath + '/' + basename);
 		file.path = uploadPath + '/' + basename;
 		if(think.isFile(file.path)) {
 			//上传完成think_img
 			let data = {
 				src: 'http://'+this.http.host+'/static/upload/' + basename,
 				width: getsize.width,
 				height: getsize.height,
 				title: post.name,
 				detail: '小码哥H5前端培训'
 			};
 			let success = await this.model('img').add(data)
 		} else {
 			console.log('not exist')
 		}
 		return this.json({
 			id: 1
 		});*/

	//let success = await this.model('img').add(data)
	//		return this.json{
	//			id:success,
	//			size:file.size
	//		}
	_default.prototype.
	yyAction = function yyAction() {var 

		post, 
		file, 
		filepath, 
		getsize, 


		uploadPath, 

		basename, 




		data, 






		success;return _regeneratorRuntime.async(function yyAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:post = this.post();file = think.extend({}, this.file('file'));filepath = file.path;getsize = sizeOf(file.path);uploadPath = think.RESOURCE_PATH + '/static/uploader';think.mkdir(uploadPath);basename = +new Date() + post.name;fs.renameSync(filepath, uploadPath + '/' + basename);file.path = uploadPath + '/' + basename;if (!think.isFile(file.path)) {context$2$0.next = 16;break;}data = { src: this.http.host + '/static/uploader/' + basename, width: getsize.width, height: getsize.height, title: post.name, detail: '小码哥H5前端培训' };context$2$0.next = 13;return _regeneratorRuntime.awrap(this.model('yy').add(data));case 13:success = context$2$0.sent;context$2$0.next = 17;break;case 16:

					console.log('not exist');case 17:return context$2$0.abrupt('return', 

					this.json({ 
						id: 1 }));case 18:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.







	alldataAction = function alldataAction() {var 
		data;return _regeneratorRuntime.async(function alldataAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(this.model('img').select());case 2:data = context$2$0.sent;if (!
					this.isJsonp()) {context$2$0.next = 7;break;}return context$2$0.abrupt('return', 
					this.jsonp(data));case 7:return context$2$0.abrupt('return', 

					this.json(data));case 8:case 'end':return context$2$0.stop();}}, null, this);};_default.prototype.


	pageAction = function pageAction() {var 
		page, 

		data;return _regeneratorRuntime.async(function pageAction$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:page = this.param('page');console.log(page);context$2$0.next = 4;return _regeneratorRuntime.awrap(this.model('img').page(page, 10).select());case 4:data = context$2$0.sent;if (!
					this.isJsonp()) {context$2$0.next = 9;break;}return context$2$0.abrupt('return', 
					this.jsonp(data));case 9:return context$2$0.abrupt('return', 

					this.json(data));case 10:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default']; //这里的 key 需要和 form 表单里的 name 值保持一致
//这里的 key 需要和 form 表单里的 name 值保持一致
//文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
//上传完成think_img