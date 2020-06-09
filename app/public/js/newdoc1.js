// $("#btninsertone").on('click',function(){

//     console.log("post insert one data")


//     $.ajax({
//         url:"/insertonedoc",
//         type:"POST",
//         contentType:"application/json;charset=utf-8",
//         data:JSON.stringify({
//             doc_name:$("#doc_name").val(),
//             doc_template:$("#doc_template").val(),
//             doc_outpath:$("#doc_outpath").val(),
//             doc_label_text:$("#doc_label_text").val(),
//             doc_image_dir:$("#doc_image_dir").val(),
//             doc_excel:$("#doc_excel").val(),
//             doc_attach_dir:$("#doc_attach_dir").val(),
//             doc_rmrk:$("#doc_rmrk").val(),
//             _csrf:this.value}),
//         dataType:"json",
//         success:function(data){
//             console.log("insert one successful")
//             console.log(data)
//             alert(data["msg"])
//         },
//         error:function(data){
//             console.log("insert one fail")
//             console.log(data)
//             alert(data["msg"])
//         }
//     })

// });



$("#newdocform").validate({
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