$("#btninsertone").on('click',function(){

    console.log("post insert one data")


    $.ajax({
        url:"/insertonedoc",
        type:"POST",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify({
            doc_name:$("#doc_name").val(),
            doc_template:$("#doc_template").val(),
            doc_outpath:$("#doc_outpath").val(),
            doc_label_text:$("#doc_label_text").val(),
            doc_image_dir:$("#doc_image_dir").val(),
            doc_excel:$("#doc_excel").val(),
            doc_attach_dir:$("#doc_attach_dir").val(),
            doc_rmrk:$("#doc_rmrk").val(),
            _csrf:this.value}),
        dataType:"json",
        success:function(data){
            console.log("insert one successful")
            console.log(data)
            alert(data["msg"])
        },
        error:function(data){
            console.log("insert one fail")
            console.log(data)
            alert(data["msg"])
        }
    })

});



$("#newdocform").bootstrapValidator({

    feedbackIcons: {//这里是用来对应三种不同状态时，在输入框后面添加的图标
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields:{//哪些字段需要验证，和html中的输入框，下拉框等等表单name属性所对应。
        doc_name:{
            validators:{//从这里也可以容易的看出可以有多个验证信息
                notEmpty:{//非空验证
                    message:"请输入用户名！！！" //提示信息，当你不写这里时它会自动的调用自带的提示信息，默认是英文，可导入language下的中文JS文件
                },
                stringLength: {//长度限制（中文字符也算一个）
                    min: 4,
                    max: 16,
                    message: "用户名长度只能在4到16位之间！！！"
                }
            }
        },
    
    }
});