'use strict';

const Controller = require('egg').Controller;


class NewdocController extends Controller {
    async index() {
     
        await this.ctx.render('newdoc');
        
    }


    async insertonedoc(){

        var postdata = this.ctx.request.body;

        await console.log(postdata);
        
        
        //insertdata

        

        //return 
        var msg = "successful"
        var returncode = 0
        var returndata = {
        data: postdata,
        msg: msg,
        returncode:returncode
        }
        this.ctx.body=returndata;

    }
}


module.exports = NewdocController;