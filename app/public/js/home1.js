
$(".reparidoc").on('click',function(){
    

    
})



$(".deletedoc").on('click',function(){
    

    
})



$(".makedoc").on('click',function(){
    console.log(this)
    console.log(this.id)
    console.log(this.name)
    console.log(this.csrf)

    $.ajax({
        url:"/makedoc",
        type:"POST",
        contentType:"application/json;charset=utf-8",
        data:JSON.stringify({docname:this.name,_csrf:this.csrf}),
        dataType:"json",
        success:function(data){
            console.log("makedoc successful")
            console.log(data)
        },
        error:function(data){
            console.log("makedoc fail")
            console.log(data)
        }
    })


})



