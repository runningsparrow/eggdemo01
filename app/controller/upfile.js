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


    async dirbuild(){
        var postdata = this.ctx.request.body;

        var doconfigone = await this.ctx.service.doconfig.findone(postdata.docname)

        const imagedir = doconfigone.doconfigone["doc_image_dir"]
        const attachdir = doconfigone.doconfigone["doc_attach_dir"]


        const basedir = this.config.baseDir
        var msg = ""
        var returncode = 0
        var returndata = {imagedir:"",attachdir:""}

        //image dir
        var imageexists = fs.existsSync(path.join(basedir, `/resouce/image/`+ imagedir + "/"))
        if(imageexists){
            console.log("图片目录存在")

            returncode = 0

            msg = msg + "image dir exists "

        }
        if(!imageexists){
            console.log("图片目录不存在")
            
            //build dir

            returncode = 1

            msg = msg + "image dir built"

            fs.mkdirSync(path.join(basedir, `/resouce/image/`+ imagedir + "/")); 



        }


        //attach dir
        var attachexists = fs.existsSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"))
        if(attachexists){
            console.log("附件目录存在")

            returncode = 0

            msg = msg + "attachment dir exists "

        }
        if(!attachexists){
            console.log("附件目录不存在")
            
            //build dir

            returncode = 1

            msg = msg + "attachment dir built"

            fs.mkdirSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/")); 



        }



        returndata.imagedir = path.join(basedir, `/resouce/image/`+ imagedir + "/")
        returndata.attachdir = path.join(basedir, `/resouce/attachment/`+ attachdir + "/")


        var returndata = {
            data: returndata,
            msg: msg,
            returncode:returncode
        }
        this.ctx.body=returndata;






    }


    async filecheck(){

        var postdata = this.ctx.request.body;

        console.log(postdata.docname)

        var doconfigone = await this.ctx.service.doconfig.findone(postdata.docname)

        const imagedir = doconfigone.doconfigone["doc_image_dir"]
        const attachdir = doconfigone.doconfigone["doc_attach_dir"]


        const basedir = this.config.baseDir

        //read template


        

        const stat1 = fs.statSync(path.join(basedir, `/resouce/template/`));

        console.log(stat1.isDirectory())

        var templatelist = []

        


        if(stat1.isDirectory()){

            // console.log("bug1")
            const templatelist1  = fs.readdirSync(path.join(basedir, `/resouce/template/`))

            const doc_template = doconfigone.doconfigone["doc_template"]

            templatelist1.forEach(function(value,index,array){
                
                if(value == doc_template)
                {
                    console.log(value)
                    templatelist.push(value)
                }
            })

            console.log(templatelist)
        }
        else{
            templatelist = []
        }

        


        //read output
        var outputlist = []
        const stat2 = fs.statSync(path.join(basedir, `/resouce/output/`));

        if(stat2.isDirectory()){
            const outputlist1  = fs.readdirSync(path.join(basedir, `/resouce/output/`))

            const doc_outpath = doconfigone.doconfigone["doc_outpath"]

            outputlist1.forEach(function(value,index,array){
                
                if(value == doc_outpath)
                {
                    console.log(value)
                    outputlist.push(value)
                }
            })

            console.log(outputlist)
        }
        else{
            outputlist = []
        }

        


        //read text
        var textlist = []
        const stat3 = fs.statSync(path.join(basedir, `/resouce/output/`));

        if(stat3.isDirectory()){
            const textlist1  = fs.readdirSync(path.join(basedir, `/resouce/text/`))


            const doc_label_text = doconfigone.doconfigone["doc_label_text"]

            textlist1.forEach(function(value,index,array){
                
                if(value == doc_label_text)
                {
                    console.log(value)
                    textlist.push(value)
                }
            })

            console.log(textlist)
        }
        else{
            textlist = []
        }

       


        //read image

        var imagelist = []
        
        // fs.exists(path.join(basedir, `/resouce/image/`+ imagedir + "/"),function(exists){
        //     if(exists){
        //         console.log("图片目录存在")

        //         const stat4 = fs.statSync(path.join(basedir, `/resouce/image/`+ imagedir + "/"));

        //         if(stat4.isDirectory()){

        //             console.log("bug image")
        //             imagelist  = fs.readdirSync(path.join(basedir, `/resouce/image/`+ imagedir + "/"))

        //             console.log(imagelist)

        //         }
        //         else{
        //             imagelist = ""
        //         }

        //     }
        //     if(!exists){
        //         console.log("图片目录不存在")
        //     }
        // });
        
        var imageexists = fs.existsSync(path.join(basedir, `/resouce/image/`+ imagedir + "/"))
        if(imageexists){
            console.log("图片目录存在")

            const stat4 = fs.statSync(path.join(basedir, `/resouce/image/`+ imagedir + "/"));

            if(stat4.isDirectory()){

                console.log("bug image")
                imagelist  = fs.readdirSync(path.join(basedir, `/resouce/image/`+ imagedir + "/"))

                console.log(imagelist)

            }
            else{
                imagelist = []
            }

        }
        if(!imageexists){
            console.log("图片目录不存在")
            imagelist = []
        }

        


        //read excel
        var excellist = []
        const stat5 = fs.statSync(path.join(basedir, `/resouce/excel/`));

        if(stat5.isDirectory()){
            const excellist1 = fs.readdirSync(path.join(basedir, `/resouce/excel/`))


            const doc_excel = doconfigone.doconfigone["doc_excel"]

            excellist1.forEach(function(value,index,array){
                
                if(value == doc_excel)
                {
                    console.log(value)
                    excellist.push(value)
                }
            })

            console.log(excellist)

        }
        else{
            excellist = []
        }

        


        //read attach
        var attachlist = []

        // fs.exists(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"),function(exists){
        //     if(exists){
        //        console.log("附件存在")


        //        const stat6 = fs.statSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"));

        //         if(stat6.isDirectory()){
        //             attachlist  = fs.readdirSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"))

        //             console.log(attachlist)
            

        //         }
        //         else{
        //             attachlist = ""
        //         }
        //     }
        //        if(!exists){
        //           console.log("附件不存在")
        //        }
        // })


        var attachexists = fs.existsSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"))
        if(attachexists){
            console.log("附件存在")


            const stat6 = fs.statSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"));

            if(stat6.isDirectory()){
                attachlist  = fs.readdirSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/"))

                console.log(attachlist)
        

            }
            else{
                attachlist = []
            }
        }
        if(!attachexists){
            console.log("附件不存在")
            attachlist = []
        }


        

       


        //return 
        var allfilelist = {
            template:"",
            output:"",
            text:"",
            image:"",
            excel:"",
            attach:""
        }


        if(templatelist !== "")
        {
            allfilelist.template = templatelist
        }
        
        if(outputlist !== "")
        {
            allfilelist.output = outputlist
        }

        if(textlist !== "")
        {
            allfilelist.text = textlist
        }

        if(imagelist !== "")
        {
            allfilelist.image = imagelist
        }

        if(excellist !== "")
        {
            allfilelist.excel = excellist
        }

        if(attachlist !== "")
        {
            allfilelist.attach = attachlist
        }
        
        console.log(imagelist)

        console.log(allfilelist.image)
        console.log(allfilelist)


        var msg = "successful"
        var returncode = 0
        var returndata = {
        data: allfilelist,
        msg: msg,
        returncode:returncode
        }
        this.ctx.body=returndata;

    }


    async fileupload(){

        // egg-multipart有对上传文件的后缀名限制的白名单(whitelist),
        // 可以在egg-multipart/config/config-default.js中对fileExtensions进行扩展，详见github egg-multipart中的介绍 

        const upfiles = this.ctx.request.files

        console.log(this.ctx.query)
        
        //read data base to get the path
        var doconfigone = await this.ctx.service.doconfig.findone(this.ctx.query.doc_name)
        // console.log(doconfigone.doconfigone)
        // console.log(doconfigone.doconfigone["doc_image_dir"])       
        const imagedir = doconfigone.doconfigone["doc_image_dir"]
        const attachdir = doconfigone.doconfigone["doc_attach_dir"]

        console.log(upfiles)

        console.log(this.config.baseDir)

        const basedir = this.config.baseDir

        var msg = "successful"
        var returncode = 0

        if(this.ctx.query.type == "template")
        {
            upfiles.forEach(function(value , index , array){

                console.log(value)
                // console.log(index)
    
                //read file
                var filedata = fs.readFileSync(value.filepath)
    
                //write file
                
                const doc_template = doconfigone.doconfigone["doc_template"]

                // console.log(doc_template)

                // console.log(value.filename)

                if(doc_template == value.filename)
                {
                    fs.writeFileSync(path.join(basedir, `/resouce/template/`+value.filename), filedata)
                }
                else{
                    msg = "上传模板文件与配置表名称不同"
                    returncode = 1
                }
    
                
    
    
    
            })
        }

        if(this.ctx.query.type == "text")
        {
            upfiles.forEach(function(value , index , array){

                console.log(value)
                // console.log(index)
    
                //read file
                var filedata = fs.readFileSync(value.filepath)
    
                //write file
                
    
                const doc_label_text = doconfigone.doconfigone["doc_label_text"]


                if(doc_label_text == value.filename)
                {
                    fs.writeFileSync(path.join(basedir, `/resouce/text/`+value.filename), filedata)
                }
                else{
                    msg = "上传文本文件与配置表中名称不同"
                    returncode = 1
                }
    
    
    
            })
        }


        if(this.ctx.query.type == "image")
        {
            upfiles.forEach(function(value , index , array){

                console.log(value)
                // console.log(index)
    
                //read file
                var filedata = fs.readFileSync(value.filepath)
    
                //write file
                
    
                fs.writeFileSync(path.join(basedir, `/resouce/image/`+imagedir + "/"+value.filename), filedata)

                
    
    
    
            })
        }

        if(this.ctx.query.type == "excel")
        {
            upfiles.forEach(function(value , index , array){

                console.log(value)
                // console.log(index)
    
                //read file
                var filedata = fs.readFileSync(value.filepath)
    
                //write file
                
    
                


                const doc_excel = doconfigone.doconfigone["doc_excel"]


                if(doc_excel == value.filename)
                {
                    fs.writeFileSync(path.join(basedir, `/resouce/excel/`+value.filename), filedata)
                }
                else{
                    msg = "excel文件与配置表中名称不同"
                    returncode = 1
                }
    
    
    
            })
        }


        if(this.ctx.query.type == "attachment")
        {
            upfiles.forEach(function(value , index , array){

                console.log(value)
                // console.log(index)
    
                //read file
                var filedata = fs.readFileSync(value.filepath)
    
                //write file
                
    
                fs.writeFileSync(path.join(basedir, `/resouce/attachment/`+ attachdir + "/" + value.filename), filedata)
    
    
    
            })
        }
        

        //return 
        
        var returndata = {
        data: upfiles,
        msg: msg,
        returncode:returncode
        }
        this.ctx.body=returndata;

    }
}


module.exports = UpfileController;