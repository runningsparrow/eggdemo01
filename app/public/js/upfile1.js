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


$("#formdatasub").click(
    function(){
        
        if(formdata1.entries().next().done)
        {
            console.log("formdata1 no entry")
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
                url:"/fileupload?_csrf=" + this.value+"&doc_name="+$('#slpk').selectpicker('val'),
                data:formdata1,
                async:false,
                contentType:false,
                processData:false,
                success:function(data){
                    console.log(data)
                },
                error:function(jqXHR){
                    console.log(JSON.stringify(jqXHR));
                }
            })
        }

        if(formdata2.entries().next().done)
        {
            console.log("formdata2 no entry")
        }
        else{
            console.log("formdata2 has entry")

            //ajaxsubmit
        }

        if(formdata3.entries().next().done)
        {
            console.log("formdata3 no entry")
        }
        else{
            console.log("formdata3 has entry")

            //ajaxsubmit
        }

        if(formdata4.entries().next().done)
        {
            console.log("formdata4 no entry")
        }
        else{
            console.log("formdata4 has entry")

            //ajaxsubmit
        }


        if(formdata5.entries().next().done)
        {
            console.log("formdata5 no entry")
        }
        else{
            console.log("formdata5 has entry")

            //ajaxsubmit    
        }
    }

    
)