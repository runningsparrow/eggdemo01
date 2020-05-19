'use strict';

const Controller = require('egg').Controller;

const child_process = require('child_process');

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';


    var para = "ddddddd"
    var workerProcess = await child_process.exec('python I:/workspace1/python/docmake/src/docquery.py '+para, 
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

    await workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });



   

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
      returncode:0
    });
  }
}

module.exports = HomeController;
