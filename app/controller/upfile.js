'use strict';

const Controller = require('egg').Controller;

class UpfileController extends Controller {

    async index() {
     
        // await this.ctx.render('upfile');

        var msg = "successful"
        var returncode = 0
        const doconfigall = await this.ctx.service.doconfig.findall();
        await console.log(doconfigall)
        await this.ctx.render('upfile',{
        doconfigall: doconfigall,
        msg: msg,
        returncode:returncode
        });

        
    }
}


module.exports = UpfileController;