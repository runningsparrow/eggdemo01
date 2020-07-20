console.log(window.location)



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



// $("#btnrepairone").on('click', function(){

//     console.log("btnrepairone")

//     window.location.href = "/"

// });


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


//下载
$(".downoutput").on('click', (event)=>{
    console.log(event.target.attributes.name.value)
    console.log(event.target.attributes.value.value)

    // $.ajax({
    //     url:"/downloadout",
    //     type:"POST",
    //     contentType:"application/json;charset=utf-8",
    //     data:JSON.stringify({docname:event.target.attributes.name.value,_csrf:event.target.attributes.value.value}),
    //     dataType:"json",
    //     success:function(data){
    //         console.log("dowload successful")
    //         console.log(data)
    //         // alert(data["msg"])
    //     },
    //     error:function(data){
    //         console.log("dowload fail")
    //         // console.log(data)
    //         // alert(data["msg"])
    //         // console.log(data.responseText)
    //         // ajax将返回数据转换为string，再利用该string创建Blob对象，下载的文件无法正确打开，数据可能已经被破坏
    //         // var blob = new Blob([data.responseText]);
    //         // //对于Blob对象，我们可以创建出一个URL来访问它。使用URL对象的createObjectURL方法。
    //         // var a = document.createElement('a');
    //         // a.download = event.target.attributes.name.value;
    //         // a.href=window.URL.createObjectURL(blob);
    //         // a.click()
    //     },
    //     complete:function(data){

    //         console.log("download complete ")

    //         console.log(typeof(data.responseText))
    //         console.log(data.responseText)
    //         //ajax将返回数据转换为string，再利用该string创建Blob对象，下载的文件无法正确打开，数据可能已经被破坏
    //         var blob = new Blob([data.responseText],{type: "application/msword"});
    //         // var blob = new Blob([data.responseText]);
    //         //对于Blob对象，我们可以创建出一个URL来访问它。使用URL对象的createObjectURL方法。
    //         var a = document.createElement('a');
    //         a.download = event.target.attributes.name.value;
    //         a.href=window.URL.createObjectURL(blob);
    //         a.click()

    //     }
    // })

    //XMLHttpRequest
    var url = "/downloadout?_csrf="+event.target.attributes.value.value+"&docname="+event.target.attributes.name.value;
    // var url = "/downloadout?_csrf="+event.target.attributes.value.value;
    var xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    xhr.open('POST', url, true);
    xhr.responseType = "blob";    // 返回类型blob
    // 定义请求完成的处理函数，请求前也可以增加加载框/禁用下载按钮逻辑
    xhr.onload = function () {
        // 请求完成
        if (this.status === 200) {
            // 返回200
            var blob = this.response;
            var reader = new FileReader();
            reader.readAsDataURL(blob);    // 转换为base64，可以直接放入a表情href
            reader.onload = function (e) {
                // 转换完成，创建一个a标签用于下载
                var a = document.createElement('a');
                a.download = event.target.attributes.name.value;
                a.href = e.target.result;
                $("body").append(a);    // 修复firefox中无法触发click
                a.click();
                $(a).remove();
            }
        }
    };
    // 发送ajax请求
    xhr.send()

})