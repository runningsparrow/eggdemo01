
$(".reparidoc").on('click',function(){
    
    console.log(this)
    console.log(this.id)
    console.log(this.name)
    console.log(this.value)
    
})



$(".deletedoc").on('click',function(){
    
    console.log(this)
    console.log(this.id)
    console.log(this.name)
    console.log(this.value)
    
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



