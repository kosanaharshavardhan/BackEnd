// core module
const http=require('http');
// external module
const express= require('express');
const app=express();
app.use((req,res,next)=>{
    console.log(req.url,req.method,1);
    next();
});
app.use((req,res,next)=>{
    console.log(req.url,req.method,2);
    res.send('<h1>HELLLLO from Second Middleware</h2>')
})
// http.createServer(app).listen(3001,()=>{
//     console.log("server running")
// })
app.listen(3001,()=>{
    console.log("server lsitening")
})
// local
