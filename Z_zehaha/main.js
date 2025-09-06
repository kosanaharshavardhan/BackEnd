const path=require('path');

const express=require('express');
const app=express();

const rootdir=require('./utils/pathutil');
const hostroute=require('./routes/hostroute');
const useroute=require('./routes/userroute');

app.use(express.urlencoded());
app.use("/host",hostroute);
app.use(useroute);


app.use(express.static(path.join(rootdir,"public")));
app.use((req,res,next)=>{
    // res.status(404).send("<h1>404 Not found</h1>")
    res.status(404).sendFile(path.join(rootdir,"views","404.html"));
})

const PORT=3001;
app.listen(PORT,()=>{
    console.log("Server RUnning and listening...");
})



