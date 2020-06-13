'use strict';

const Controller = require('egg').Controller;

class UpfileController extends Controller {

    async index() {
     
        await this.ctx.render('upfile');
        
    }
}


module.exports = UpfileController;