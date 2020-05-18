'use strict';

const Controller = require('egg').Controller;

const child_process = require('child_process');




class ScriptController extends Controller {
    async index() {
      const { ctx } = this;
      ctx.body = 'run script';

      //

      //ref https://www.jianshu.com/p/b1dc42c152ab

      
      var para = "ddddddd"
      var workerProcess = await child_process.exec('python I:/workspace1/python/docmake/src/docmaker.py '+para, 
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
    }

 



  }
  
  module.exports = ScriptController;