'use strict';

const fs = require('fs')
const path = require('path')
const util = require('util');
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



  //下载

  async downloadout(){

    //get file path 
    await console.log("fdsafsdaf")
    var postdata = this.ctx.request.body;
    
    await console.log(postdata)

    await console.log(this.ctx.query)

    


    //process download 
    const basedir = this.config.baseDir

    // const filepath = path.join(basedir, `/resouce/output/`+postdata.docname)
    const filepath = path.join(basedir, `/resouce/output/`+this.ctx.query.docname)
    const filesize = (await util.promisify(fs.stat)(filepath)).size.toString();
    console.log(filesize)
    this.ctx.attachment(filepath);
    this.ctx.set('Content-Length', filesize);
    // this.ctx.set('Content-Type', 'application/octet-stream');
    this.ctx.set('Content-Type', 'application/msword');
    console.log(fs.createReadStream(filepath))
    this.ctx.body = fs.createReadStream(filepath);


  }

  async makedoc() {

    //get方式
    // var query = this.ctx.query;

    //post方式
    var postdata = this.ctx.request.body;

    

    await console.log(postdata);

    await console.log("======================")

    var retruncode1 = await this.checkcodition(postdata.docname)

    //returncode1 = 1 other error
    //returncode1 = 2 no template

    console.log("检查返回码")
    console.log(retruncode1)

    if(retruncode1 == 0)
    {
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


      var msg = "处理成功！"
      var returncode = 0
    }
    else{

      var msg = "读取模板失败！"
      var returncode = retruncode1

    }

    
    var returndata = {
      data: postdata,
      msg: msg,
      returncode:returncode
    }
    // this.ctx.body=returndata;

    // await this.ctx.render('home',{
    //   returndata
    // });

    this.ctx.body = returndata;

  }


  checkcodition = async function(docname){

    var doconfigone = await this.ctx.service.doconfig.findone(docname)

    const imagedir = doconfigone.doconfigone["doc_image_dir"]
    const attachdir = doconfigone.doconfigone["doc_attach_dir"]


    const basedir = this.config.baseDir



    //read template


        

    const stat1 = fs.statSync(path.join(basedir, `/resouce/template/`));

    console.log(stat1.isDirectory())

    //init
    var checkreturncode = 2

    


    if(stat1.isDirectory()){

        // console.log("bug1")
        const templatelist1  = fs.readdirSync(path.join(basedir, `/resouce/template/`))

        const doc_template = doconfigone.doconfigone["doc_template"]

        templatelist1.forEach(function(value,index,array){
            
            if(value == doc_template)
            {
                console.log(value)
                checkreturncode = 0
            }
        })

        
    }
    else{
      checkreturncode = 1
    }


    console.log(checkreturncode)

    return checkreturncode



  }


  //delete data
  async deletedoc(){

    //post方式
    var postdata = this.ctx.request.body;

    await console.log(postdata);


    const returndata = await this.ctx.service.doconfig.deleteone(postdata.doc_name1);


    // var msg = "successful"
    // var returncode = 0
    // var returndata = {
    //   data: returndata,
    //   msg: msg,
    //   returncode:returncode
    // }
    // this.ctx.body=returndata;

    var msg = "successful"
    var returncode = 0
    const doconfigall = await this.ctx.service.doconfig.findall();
    await console.log(doconfigall)
    await this.ctx.redirect('/',{
      doconfigall: doconfigall,
      msg: msg,
      returncode:returncode
    });


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

    var returndata = await this.ctx.service.doconfig.updateone(doconfigone);


    // var msg = "successful"
    // var returncode = 0
    // var returndata = {
    //   data: returndata,
    //   msg: msg,
    //   returncode:returncode
    // }
    // this.ctx.body=returndata;

    var msg = "successful"
    var returncode = 0
    // const doconfigone = await this.ctx.service.doconfig.findone("test4");
    const doconfigall = await this.ctx.service.doconfig.findall();
    await console.log(doconfigall)
    // await this.ctx.render('home',{
    //   doconfigall: doconfigall,
    //   msg: msg,
    //   returncode:returncode
    // });

    await this.ctx.redirect('/',{
      doconfigall: doconfigall,
      msg: msg,
      returncode:returncode
    });


  }

}

module.exports = HomeController;
