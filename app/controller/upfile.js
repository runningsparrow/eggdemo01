'use strict';
const fs = require('fs')
const path = require('path')
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


    async fileupload(){

        const upfiles = this.ctx.request.files

        console.log(this.ctx.query)

        console.log(upfiles)

        console.log(this.config.baseDir)

        const basedir = this.config.baseDir

        upfiles.forEach(function(value , index , array){

            console.log(value)
            // console.log(index)

            //read file
            var filedata = fs.readFileSync(value.filepath)

            //write file
            

            fs.writeFileSync(path.join(basedir, `/resouce/template/`+value.filename), filedata)



        })

        //return 
        var msg = "successful"
        var returncode = 0
        var returndata = {
        data: upfiles,
        msg: msg,
        returncode:returncode
        }
        this.ctx.body=returndata;

    }
}


module.exports = UpfileController;