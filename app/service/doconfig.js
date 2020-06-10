'use strict';

const Service = require('egg').Service;

class DoconfigService extends Service {
    async findone(dname) {
      //
      await console.log(dname)
      const doconfigone = await this.app.mysql.get('doconfig',{doc_name:dname}); 

      await console.log("findone")
      await console.log(doconfigone)


      return { doconfigone };
      
    }

    async findall() {
      //
      const doconfigall = await this.app.mysql.select('doconfig'); 
      return { doconfigall };
      
    }


    async insertone(doconfigone){
      //
      const retruncode = await this.app.mysql.insert("doconfig",doconfigone)
      
      await console.log(retruncode)

      return retruncode
    

    }

    async updateone(doconfigone){

      const retruncode = await this.app.mysql.update('doconfig',doconfigone);

      await console.log(retruncode)

      return retruncode

    }


  }


  module.exports = DoconfigService;