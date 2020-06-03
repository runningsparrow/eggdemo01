'use strict';

const Controller = require('egg').Controller;


class GuideController extends Controller {
    async index() {
     
        await this.ctx.render('guide');
        
    }
}


module.exports = GuideController;