// var select = $("#slpk");
// select.append("<option value='1'>香蕉</option>");
// select.append("<option value='2'>苹果</option>");
// select.append("<option value='3'>橘子</option>");


// $("#doctemplate").dialog({

//     modal:true,
//     title:"选择模板文件",
//     resizable:false,
//     autoOpen:false,
//     closeonEscape:true,
//     // closable : false,
//     open:function(event,ui){

//         $(".ui-dialog-titlebar-close").hide();

//     },
//     buttons:[{
//         id:"doc_templatesubmit",
//         text:"提交",
//         click:function(){
//             //
//         }
//     },
//     {
//         id:"doc_templatecancel",
//         text:"取消",
//         click:function(){
//             //
//             $(this).dialog('close');
//         }
//     }
//     ]
// });


// $("#btntest1").click(
//     function(){
//         $("#doctemplate").dialog("open");
//     }
// );

var formdata1 = new FormData();
var formdata2 = new FormData();
var formdata3 = new FormData();
var formdata4 = new FormData();
var formdata5 = new FormData();



$("#inputdoc_template").change(
    function(){
        //clear
        for(var pair of formdata1.entries()) {
            // console.log(pair[0]+ ', '+ pair[1]); 
            formdata1.delete(pair[0])
         }

        console.log(this.files[0])
        formdata1.append('inputdoc_template',this.files[0])
        $("#doctemplatelist").empty()
        var one = "<div>"+formdata1.get('inputdoc_template').name+"</div>"
        $("#doctemplatelist").append(one)
    }
)

$("#inputdoc_label_text").change(
    function(){
        for(var pair of formdata2.entries()) {
            // console.log(pair[0]+ ', '+ pair[1]); 
            formdata2.delete(pair[0])
         }
        console.log(this.files[0])
        formdata2.append('inputdoc_label_text',this.files[0])
        $("#inputdoc_label_textlist").empty()
        var one = "<div>"+formdata2.get('inputdoc_label_text').name+"</div>"
        $("#inputdoc_label_textlist").append(one)
        
    }
)


$("#inputdoc_image_dir").change(
    function(){
        for(var pair of formdata3.entries()) {
            // console.log(pair[0]+ ', '+ pair[1]); 
            formdata3.delete(pair[0])
         }
        $("#inputdoc_image_dirlist").empty()
        for(i=0; i< this.files.length;i++){
            console.log(this.files[i])
            formdata3.append('inputdoc_image'+i,this.files[i])
            
            
            var one = "<div>"+formdata3.get('inputdoc_image'+i).name+"</div>"
            $("#inputdoc_image_dirlist").append(one)
        }
        
        
    }
)

$("#inputdoc_excel").change(
    function(){
        for(var pair of formdata4.entries()) {
            // console.log(pair[0]+ ', '+ pair[1]); 
            formdata4.delete(pair[0])
         }
        
        console.log(this.files[0])
        formdata4.append('inputdoc_excel',this.files[0])
        $("#inputdoc_excellist").empty()
        var one = "<div>"+formdata4.get('inputdoc_excel').name+"</div>"
        $("#inputdoc_excellist").append(one)
    }
)


$("#inputdoc_attach_dir").change(
    function(){
        for(var pair of formdata5.entries()) {
            // console.log(pair[0]+ ', '+ pair[1]); 
            formdata5.delete(pair[0])
         }
         $("#inputdoc_attach_dirlist").empty()
        for(i=0; i< this.files.length;i++){
            console.log(this.files[i])
            formdata5.append('inputdoc_attach'+i,this.files[i])
            // console.log(formdata.get('inputdoc_attach'+i));
            var one = "<div>"+formdata5.get('inputdoc_attach'+i).name+"</div>"
            $("#inputdoc_attach_dirlist").append(one)
        }
        
        
    }
)


$("btnclearfile").click(function(){

    console.log("btnclearfile")
    $.ajax({
        url:"/clearfile",
        type:"POST",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify({docname:$('#slpk').selectpicker('val'),_csrf:this.value}),
        dataType:"json",
        success:function(data){
            console.log("clear file successful")
            console.log(data)

        },
        error:function(data){
            console.log("clear file fail")
            console.log(data)


        }

    })

});


$("#builddir").click(
    function(){
        console.log("dirbuild")

        $.ajax({
            url:"/dirbuild",
            type:"POST",
            contentType:"application/json;charset=utf-8",
            data:JSON.stringify({docname:$('#slpk').selectpicker('val'),_csrf:this.value}),
            dataType:"json",
            success:function(data){
                console.log("build dir successful")
                console.log(data)

            },
            error:function(data){
                console.log("build dir fail")
                console.log(data)


            }

        })

    }
);

$("#scanfile").click(
    function(){

        $.ajax({
            url:"/filecheck",
            type:"POST",
            contentType:"application/json;charset=utf-8",
            data:JSON.stringify({docname:$('#slpk').selectpicker('val'),_csrf:this.value}),
            dataType:"json",
            success:function(data){
                console.log("check successful")
                console.log(data)

                $("#template").empty()
                data.data.template.forEach(function(value , index , array){

                    
                    var one = "<div>"+value+"</div>";

                    $("#template").append(one)
        
                });

                $("#output").empty()
                data.data.output.forEach(function(value , index , array){

                    
                    var one = "<div>"+value+"</div>";

                    $("#output").append(one)
        
                });

                $("#text").empty()
                data.data.text.forEach(function(value , index , array){

                    
                    var one = "<div>"+value+"</div>";

                    $("#text").append(one)
        
                });

                $("#image").empty()
                data.data.image.forEach(function(value , index , array){

                    
                    var one = "<div>"+value+"</div>";

                    $("#image").append(one)
        
                });

                $("#excel").empty()
                data.data.excel.forEach(function(value , index , array){

                    
                    var one = "<div>"+value+"</div>";

                    $("#excel").append(one)
        
                });

                $("#attach").empty()
                data.data.attach.forEach(function(value , index , array){

                    
                    var one = "<div>"+value+"</div>";

                    $("#attach").append(one)
        
                });


                
                
                
            },
            error:function(data){
                console.log("check fail")
                console.log(data)
                
            }
        })
    }
)

$("#formdatasub").click(
    function(){
        
        if(formdata1.entries().next().done)
        {
            console.log("formdata1 no entry")
            $("#doctemplatesubstatus").empty()
            var one = "<div>"+"未选择文件"+"</div>"
            $("#doctemplatesubstatus").append(one)
        }
        else{
            console.log("formdata1 has entry")

            //ajaxsubmit
            // $.ajaxSetup({
            //     data:{_csrf:this.value}
            // })


            console.log(this.value)

            $.ajax({
                type:"POST",
                url:"/fileupload?_csrf=" + this.value+"&doc_name="+$('#slpk').selectpicker('val')+"&type=template",
                data:formdata1,
                async:false,
                contentType:false,
                processData:false,
                success:function(data){
                    console.log(data)

                    $("#doctemplatesubstatus").empty()
                    if(data.returncode == 0)
                    {
                        var one = "<div>"+"上传成功"+"</div>"
                        $("#doctemplatesubstatus").append(one)
                    }
                    else{
                        var one = "<div>"+data.msg+"</div>"
                        $("#doctemplatesubstatus").append(one)
                    }
                        
                    
                },
                error:function(jqXHR){
                    console.log(JSON.stringify(jqXHR));
                    $("#doctemplatesubstatus").empty()
                    var one = "<div>"+"上传失败"+"</div>"
                    $("#doctemplatesubstatus").append(one)
                } 
            })
        }

        if(formdata2.entries().next().done)
        {
            console.log("formdata2 no entry")
            $("#inputdoc_label_textsubstatus").empty()
            var one = "<div>"+"未选择文件"+"</div>"
            $("#inputdoc_label_textsubstatus").append(one)
        }
        else{
            console.log("formdata2 has entry")

            //ajaxsubmit

            $.ajax({
                type:"POST",
                url:"/fileupload?_csrf=" + this.value+"&doc_name="+$('#slpk').selectpicker('val')+"&type=text",
                data:formdata2,
                async:false,
                contentType:false,
                processData:false,
                success:function(data){
                    console.log(data)
                    $("#inputdoc_label_textsubstatus").empty()
                    if(data.returncode == 0)
                    {
                        console.log("text bug1 ")
                        var one = "<div>"+"上传成功"+"</div>"
                        $("#inputdoc_label_textsubstatus").append(one)
                    }
                    else{
                        console.log("text bug2 ")
                        var one = "<div>"+data.msg+"</div>"
                        $("#inputdoc_label_textsubstatus").append(one)
                    }
                    
                    
                },
                error:function(jqXHR){
                    console.log(JSON.stringify(jqXHR));
                    $("#inputdoc_label_textsubstatus").empty()
                    var one = "<div>"+"上传失败"+"</div>"
                    $("#inputdoc_label_textsubstatus").append(one)
                } 
            })
        }

        if(formdata3.entries().next().done)
        {
            console.log("formdata3 no entry")
            $("#inputdoc_image_dirsubstatus").empty()
            var one = "<div>"+"未选择文件"+"</div>"
            $("#inputdoc_image_dirsubstatus").append(one)
        }
        else{
            console.log("formdata3 has entry")

            //ajaxsubmit


            $.ajax({
                type:"POST",
                url:"/fileupload?_csrf=" + this.value+"&doc_name="+$('#slpk').selectpicker('val')+"&type=image",
                data:formdata3,
                async:false,
                contentType:false,
                processData:false,
                success:function(data){
                    console.log(data)
                    $("#inputdoc_image_dirsubstatus").empty()
                    var one = "<div>"+"上传成功"+"</div>"
                    $("#inputdoc_image_dirsubstatus").append(one)
                    
                },
                error:function(jqXHR){
                    console.log(JSON.stringify(jqXHR));
                    $("#inputdoc_image_dirsubstatus").empty()
                    var one = "<div>"+"上传失败"+"</div>"
                    $("#inputdoc_image_dirsubstatus").append(one)
                } 
            })
        }

        if(formdata4.entries().next().done)
        {
            console.log("formdata4 no entry")
            $("#inputdoc_excelstatus").empty()
            var one = "<div>"+"未选择文件"+"</div>"
            $("#inputdoc_excelstatus").append(one)
        }
        else{
            console.log("formdata4 has entry")

            //ajaxsubmit

            $.ajax({
                type:"POST",
                url:"/fileupload?_csrf=" + this.value+"&doc_name="+$('#slpk').selectpicker('val')+"&type=excel",
                data:formdata4,
                async:false,
                contentType:false,
                processData:false,
                success:function(data){
                    console.log(data)
                    $("#inputdoc_excelstatus").empty()
                    if(data.returncode == 0)
                    {
                        var one = "<div>"+"上传成功"+"</div>"
                        $("#inputdoc_excelstatus").append(one)
                    }
                    else{
                        var one = "<div>"+data.msg+"</div>"
                        $("#inputdoc_excelstatus").append(one)
                    }
                    
                    
                },
                error:function(jqXHR){
                    console.log(JSON.stringify(jqXHR));
                    $("#inputdoc_excelstatus").empty()
                    var one = "<div>"+"上传失败"+"</div>"
                    $("#inputdoc_excelstatus").append(one)
                } 
            })
        }


        if(formdata5.entries().next().done)
        {
            console.log("formdata5 no entry")
            $("#inputdoc_attach_dirstatus").empty()
            var one = "<div>"+"未选择文件"+"</div>"
            $("#inputdoc_attach_dirstatus").append(one)
        }
        else{
            console.log("formdata5 has entry")

            //ajaxsubmit    

            $.ajax({
                type:"POST",
                url:"/fileupload?_csrf=" + this.value+"&doc_name="+$('#slpk').selectpicker('val')+"&type=attachment",
                data:formdata5,
                async:false,
                contentType:false,
                processData:false,
                success:function(data){
                    console.log(data)
                    $("#inputdoc_attach_dirstatus").empty()
                    var one = "<div>"+"上传成功"+"</div>"
                    $("#inputdoc_attach_dirstatus").append(one)
                    
                },
                error:function(jqXHR){
                    console.log(JSON.stringify(jqXHR));
                    $("#inputdoc_attach_dirstatus").empty()
                    var one = "<div>"+"上传失败"+"</div>"
                    $("#inputdoc_attach_dirstatus").append(one)
                } 
            })
        }
    }

    
)