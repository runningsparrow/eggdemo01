'use strict';

const Controller = require('egg').Controller;


class NewdocController extends Controller {
    async index() {
     
        await this.ctx.render('newdoc');
        
    }


    async insertonedoc(){

        var postdata = this.ctx.request.body;

        await console.log("bug1")
        await console.log(postdata);
        
        
        //insertdata
        var doconfigone = {
            doc_name:postdata.doc_name,
            doc_template:postdata.doc_template,
            doc_outpath:postdata.doc_outpath,
            doc_label_text:postdata.doc_label_text,
            doc_image_dir:postdata.doc_image_dir,
            doc_excel:postdata.doc_excel,
            doc_attach_dir:postdata.doc_attach_dir,
            doc_rmrk:postdata.doc_rmrk
        }

        await console.log("bug2")
        await console.log(doconfigone)

        await this.ctx.service.doconfig.insertone(doconfigone);

        

        //return 
        var msg = "successful"
        var returncode = 0
        var returndata = {
        data: postdata,
        msg: msg,
        returncode:returncode
        }
        // this.ctx.body=returndata;


        console.log("jump to newdoc")

        await this.ctx.redirect('/newdoc',{
            data: returndata,
            msg: msg,
            returncode:returncode
        });

    }
}


module.exports = NewdocController;