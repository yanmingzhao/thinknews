'use strict';
var fs = require('fs');
var path = require('path');
var sizeOf = require('image-size');
import Base from './base.js';
export default class extends Base {
	/**
	 * index action
	 * @return {Promise} []
	 */
	async indexAction(self) {
		return self.display();
	}
	async addAction() {
		//这里的 key 需要和 form 表单里的 name 值保持一致
		let post = this.post();

		
		let file = think.extend({}, this.file('file'));
		let filepath = file.path;
		let basename = path.basename(filepath);
		let data ;
		let getsize = sizeOf(filepath);
		
		let qiniu = think.service("qiniu");
	    let instance = new qiniu();
	    let uppic = await instance.uploadpic(filepath,basename);
		
	    if(!think.isEmpty(uppic)){
	    	data = {
	    		src: 'http://7xt80d.com1.z0.glb.clouddn.com/' + basename,
				width: getsize.width,
				height: getsize.height,
				title: post.name
	    	}
			let success = await this.model('img').add(data);
			this.json(success)
	    }
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
	}
	async yyAction() {
		//这里的 key 需要和 form 表单里的 name 值保持一致
		let post = this.post();
		let file = think.extend({}, this.file('file'));
		let filepath = file.path;
		var getsize = sizeOf(file.path);
		
		//文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
		let uploadPath = think.RESOURCE_PATH + '/static/uploader';
		think.mkdir(uploadPath);
		let basename = (+new Date()) + post.name;
		fs.renameSync(filepath, uploadPath + '/' + basename);
		file.path = uploadPath + '/' + basename;
		if(think.isFile(file.path)) {
			//上传完成think_img
			let data = {
				src: this.http.host+'/static/uploader/' + basename,
				width: getsize.width,
				height: getsize.height,
				title: post.name,
				detail: '小码哥H5前端培训'
			};
			let success = await this.model('yy').add(data)
		} else {
			console.log('not exist')
		}
		return this.json({
			id: 1
		});
	}
	
	
	
	
	
	async alldataAction() {
		let data = await this.model('img').select();
		if (this.isJsonp()) {
			return this.jsonp(data);
		} else {
			return this.json(data);
		}
	}
	async pageAction() {
		let page = this.param('page');
		console.log(page);
		let data = await this.model('img').page(page,10).select();
		if (this.isJsonp()) {
			return this.jsonp(data);
		} else {
			return this.json(data);
		}
	}
}