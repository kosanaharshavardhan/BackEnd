const express=require('express');
const app=express();

const usermodel=require('./user-model');

app.get('/',(req,res)=>{
    res.send("blank")
})


app.get('/create',async (req,res)=>{
    let newuser=await usermodel.create({
        name:"harsha",
        age:1203
    }) 
    res.send(newuser)
})
app.get('/up',async (req,res)=>{
    let upadate=await usermodel.findOneAndUpdate({name:"harsha"},{age:23},{new:true});
    res.send(upadate)
})
app.get('/del',async (req,res)=>{
    let del=await usermodel.findOneAndDelete({name:"harsha"});
    res.send(del)
})
app.get('/fin',async (req,res)=>{
    let f=await usermodel.find();
    usermodel.find({

    })
    //findOne array
    res.send(f)
})
app.listen(3000,()=>{
    console.log("Hello")
})