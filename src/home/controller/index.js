'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(self){
    return self.display();
  }
  async addlistAction(self){
    return self.display();
  }
  
  async adddataAction(){
    let data = this.get();
    console.log(data);
  }
  
  async addnewtypeAction(self){
  	return self.display();
  }
  
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