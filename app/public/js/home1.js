
$(".reparidoc").on('click',function(){
    
    console.log(this)
    console.log(this.id)
    console.log(this.name)
    console.log(this.value)


    $.ajax({
        url:"/queryone",
        type:"POST",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify({docname:this.name,_csrf:this.value}),
        dataType:"json",
        success:function(data){
            console.log("queryone successful")
            console.log(data)
            // alert(data["msg"])

            $("#myModalLabel").html("修改"+data.data.doconfigone.doc_name)

            $("#doc_name").val(data.data.doconfigone.doc_name)
            $("#doc_template").val(data.data.doconfigone.doc_template)
            $("#doc_outpath").val(data.data.doconfigone.doc_outpath)
            $("#doc_label_text").val(data.data.doconfigone.doc_label_text)
            $("#doc_image_dir").val(data.data.doconfigone.doc_image_dir)
            $("#doc_excel").val(data.data.doconfigone.doc_excel)
            $("#doc_attach_dir").val(data.data.doconfigone.doc_attach_dir)
            $("#doc_rmrk").val(data.data.doconfigone.doc_rmrk)
        },
        error:function(data){
            console.log("queryone fail")
            console.log(data)
            $("#myModalLabel").html("未找到"+data.data.doconfigone.doc_name)
            // alert(data["msg"])
        }
    })

    
})






$(".deletedoc").on('click',function(){
    
    console.log(this)
    console.log(this.id)
    console.log(this.name)
    console.log(this.value)

    $.ajax({
        url:"/queryone",
        type:"POST",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify({docname:this.name,_csrf:this.value}),
        dataType:"json",
        success:function(data){
            console.log("delete successful")
            console.log(data)
            // alert(data["msg"])

            $("#deleteModalLabel").html("删除"+data.data.doconfigone.doc_name)

            $("#doc_name1").val(data.data.doconfigone.doc_name)
            $("#doc_template1").val(data.data.doconfigone.doc_template)
            $("#doc_outpath1").val(data.data.doconfigone.doc_outpath)
            $("#doc_label_text1").val(data.data.doconfigone.doc_label_text)
            $("#doc_image_dir1").val(data.data.doconfigone.doc_image_dir)
            $("#doc_excel1").val(data.data.doconfigone.doc_excel)
            $("#doc_attach_dir1").val(data.data.doconfigone.doc_attach_dir)
            $("#doc_rmrk1").val(data.data.doconfigone.doc_rmrk)
        },
        error:function(data){
            console.log("delete fail")
            console.log(data)
            $("#deleteModalLabel").html("未找到"+data.data.doconfigone.doc_name)
            // alert(data["msg"])
        }
    })

    
})



$(".makedoc").on('click',function(){
    console.log(this)
    console.log(this.id)
    console.log(this.name)
    console.log(this.value)

    $.ajax({
        url:"/makedoc",
        type:"POST",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify({docname:this.name,_csrf:this.value}),
        dataType:"json",
        success:function(data){
            console.log("makedoc successful")
            console.log(data)
            alert(data["msg"])
        },
        error:function(data){
            console.log("makedoc fail")
            console.log(data)
            alert(data["msg"])
        }
    })


})



$("#repairdocform").validate({
    rules: {
        doc_name: {
            required: true,   
          },
        doc_template: {
            required: true,   
        },  
        doc_outpath: {
            required: true,   
        },  
        doc_label_text: {
            required: true,   
        },  
        doc_image_dir: {
            required: true,   
        },  
        doc_excel: {
            required: true,   
        },  
        doc_attach_dir: {
            required: true,   
        },  
    }
    
})