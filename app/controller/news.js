'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';

    // this.ctx.body = "新闻页面1";

    //换成使用 html 渲染页面
    //注意需要使用同步方式渲染页面
      await this.ctx.render('news');
      
  }

  async content() {

    //获取 get 传值


    // koa中如何获取get传值  ctx.query

    //egg.js 里面获取

    var query = this.ctx.query;

    console.log(query);

    this.ctx.body = "新闻详情";
  }

  async newslist(){

    //koa获取动态路由传值  ctx.params

    var params = this.ctx.params;
    console.log(params);

    this.ctx.body="新闻列表";

  }

}




module.exports = NewsController;
