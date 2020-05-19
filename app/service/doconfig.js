'use strict';

const Service = require('egg').Service;

class DoconfigService extends Service {
    async findone(dname) {
      //
      const doconfigone = await this.app.mysql.get('doconfig',{doc_name:dname}); 
      return { doconfigone };
      
    }

    async findall() {
      //
      const doconfigall = await this.app.mysql.select('doconfig'); 
      return { doconfigall };
      
    }


  }


  module.exports = DoconfigService;