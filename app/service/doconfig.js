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

    async updateone(doconfig){

      // const retruncode = await this.app.mysql.update('doconfig',doconfigone);

      const doconfigone = await this.app.mysql.get('doconfig',{doc_name:doconfig.doc_name}); 

      console.log("bug3231")
      console.log(doconfigone)
      console.log(doconfig)
      const returncode = await 
      this.app.mysql.query("update doconfig set doc_name=?, doc_template=? ,doc_outpath=?,doc_label_text=?,doc_image_dir=?,doc_excel=?, doc_attach_dir=?,doc_rmrk =? where doc_id = ?",
      [doconfig.doc_name,doconfig.doc_template,doconfig.doc_outpath,doconfig.doc_label_text,doconfig.doc_image_dir,doconfig.doc_excel,
        doconfig.doc_attach_dir,doconfig.doc_rmrk,doconfigone.doc_id]);

      await console.log(returncode)

      return returncode

    }


  }


  module.exports = DoconfigService;