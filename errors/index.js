const http=require('http');
const ts=require('./testing');
http.createServer((req,res)=>{
    console.log(req.url,req.method);
    ts();
}).listen(3001,()=>{
    console.log("Server listening");
})