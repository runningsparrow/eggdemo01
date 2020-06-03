'use strict';

const Controller = require('egg').Controller;


class NewdocController extends Controller {
    async index() {
     
        await this.ctx.render('newdoc');
        
    }
}


module.exports = NewdocController;