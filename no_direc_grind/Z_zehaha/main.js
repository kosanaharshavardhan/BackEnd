const path=require('path');

const express=require('express');
const app=express();
const contriller=require('./controllers/homes')
const rootdir=require('./utils/pathutil');
const {hostroute}=require('./routes/hostroute');
const useroute=require('./routes/userroute');
app.set("view engine","ejs");
app.set("views","views");

app.use(express.urlencoded());
app.use("/host",hostroute);
app.use(useroute);


app.use(express.static(path.join(rootdir,"public")));
app.use(contriller.$404controller);

const PORT=3001;
app.listen(PORT,()=>{
    console.log("Server RUnning and listening...");
})



