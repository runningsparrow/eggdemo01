//解决跨域问题,需要在发送请求时候,将此 _csrf 一并发送到 server端
module.exports=(option,app)=>{
    
    return async function auth(ctx,next){
        //设置模板全局变量

        ctx.state.csrf=ctx.csrf;

        //?
        await next();
    }
}