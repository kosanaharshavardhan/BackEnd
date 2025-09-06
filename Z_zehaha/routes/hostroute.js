const path=require('path');

const express=require('express');
const hostroute=express.Router();

const rootdir=require('../utils/pathutil');


hostroute.get("/add-home",(req,res)=>{
//  res.sendFile(path.join(__dirname,"../","views","addhome.html"))
 res.sendFile(path.join(rootdir,"views","addhome.html"));
})

hostroute.post("/add-home",(req,res)=>{
     // res.send(

    //     `<h3>Register Here2</h3>
    //     <form action='/add-home' method='POST'>
    //     <input type="text" name="house" placeholder="Enter your name">
    //     <input type="submit" value="Submit"/>
    //     </form>
    //     `
    // )
    console.log(req.body);
    res.sendFile(path.join(rootdir,"views","homeadded.html"));
})

module.exports=hostroute;