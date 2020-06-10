'use strict';

const Controller = require('egg').Controller;

const child_process = require('child_process');

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';


    // var para = "ddddddd"
    // var ppath = 'python '+this.config.pythonpath+'docquery.py '
    // console.log("============")
    // console.log(ppath)


    // var workerProcess = await child_process.exec(ppath+para, 
    //   function (error, stdout, stderr) {
    //   if (error) {
    //       console.log("debug")
    //       console.log(error.stack);
    //       console.log('Error code: '+error.code);
    //       console.log('Signal received: '+error.signal);
    //   }
    //   console.log('stdout: ' + stdout);
    //   console.log('stderr: ' + stderr);


      

    // });

    // await workerProcess.on('exit', function (code) {
    //     console.log('子进程已退出，退出码 '+code);
    // });



   

    // await this.ctx.render(home,{

    // });

    var msg = "successful"
    var returncode = 0
    // const doconfigone = await this.ctx.service.doconfig.findone("test4");
    const doconfigall = await this.ctx.service.doconfig.findall();
    await console.log(doconfigall)
    await this.ctx.render('home',{
      doconfigall: doconfigall,
      msg: msg,
      returncode:returncode
    });
  }


  async makedoc() {

    //get方式
    // var query = this.ctx.query;

    //post方式
    var postdata = this.ctx.request.body;

    await console.log(postdata);

    

    //run python 
    var para = postdata.docname
    // var ppath = 'python '+this.config.pythonpath+'docquery.py '

    var ppath = 'python '+this.config.pythonpath+'docmaker.py '

    var workerProcess = await child_process.exec(ppath+para, 
        function (error, stdout, stderr) {
        if (error) {
            console.log("debug")
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
      });


    var msg = "successful"
    var returncode = 0
    var returndata = {
      data: postdata,
      msg: msg,
      returncode:returncode
    }
    this.ctx.body=returndata;

  }


  //delete data
  async deletedoc(){

    //post方式
    var postdata = this.ctx.request.body;

    await console.log(postdata);

  }


  //query one docdata
  async queryone(){
    var postdata = this.ctx.request.body;

    // await console.log(postdata)

    // await console.log(postdata.docname)

    var doconfigone = await this.ctx.service.doconfig.findone(postdata.docname)

    

    var msg = "successful"
    var returncode = 0
    var returndata = {
      data: doconfigone,
      msg: msg,
      returncode:returncode
    }
    this.ctx.body=returndata;

  }


  async updateone(){
    var postdata =  this.ctx.request.body;

    var doconfigone = await this.ctx.service.doconfig.findone(postdata.docname)




    var doconfigone = {
      doc_id:doconfigone.doc_id,
      doc_name:postdata.doc_name,
      doc_template:postdata.doc_template,
      doc_outpath:postdata.doc_outpath,
      doc_label_text:postdata.doc_label_text,
      doc_image_dir:postdata.doc_image_dir,
      doc_excel:postdata.doc_excel,
      doc_attach_dir:postdata.doc_attach_dir,
      doc_rmrk:postdata.doc_rmrk
    }


    await console.log(doconfigone)

    returndata = await this.ctx.service.doconfig.updateone(doconfigone);


    var msg = "successful"
    var returncode = 0
    var returndata = {
      data: returndata,
      msg: msg,
      returncode:returncode
    }
    this.ctx.body=returndata;



  }

}

module.exports = HomeController;
