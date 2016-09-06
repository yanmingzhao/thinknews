'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  //显示新闻数据列表页面
  async indexAction(self){
    return self.display();
  }
  //显示增加新闻数据页面
  async addlistAction(self){
    return self.display();
  }
  //后台增加新闻数据
  async adddataAction(){
    let postdata = this.post();
    let data;
    if(!think.isEmpty(postdata)){
   		data = await this.model('addlist').add(postdata);
    }
    this.success(data);
  }
  //增加newtype数据
  async addnewtypeAction(self){
  	return self.display();
  }
  //获取newtype数据
  async newdataAction(){
    let data = await this.model('newtype').select();
    this.success(data);
  }
  async addAction(){
    let data = {
      name: 'welefen' + Math.random(),
      email: 'admin@thinkjs.org',
      title: Math.random()
    }
    let result = await this.model('user').add(data);
    this.success(result);
  }
  async findAction(){
    let data = await this.model('user').where({id: 1}).find();
    this.success(data);
  }
  async countSelectAction(){
    let data = await this.model('user').page(100, 3).countSelect(false);
    this.success(data);
  }
  testAction(){
    let model = this.model('user');
    model.where19Test();
    this.success();
  }
}