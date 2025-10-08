const express=require('express');
const app=express();
app.listen(3001,()=>{
    console.log("well Hello there the server is listeing...")
})
app.use('/',(req,res,next)=>{
    console.log("/ path middle ware");
    // res.send('<button>cool</button>')
    next()
})

app.use('/login',(req,res,next)=>{
    res.send("Install Microsoft authenticator")
})
