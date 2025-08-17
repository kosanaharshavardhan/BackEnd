const express=require('express')
const app=express()
const parser=require('body-parser');

app.get('/contact',(req,res,next)=>{
    res.send(
        '<form action="/contact" method="post"><input type="text" name="username"><input type="submit" value="Go"></form>')
        next()
})
app.use(parser.urlencoded());
app.post('/contact',(req,res,next)=>{
    console.log(req.body);
})
app.listen(3001,()=>{
    console.log("Server running...");
})