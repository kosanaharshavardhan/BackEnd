const path=require('path');
const homes=require('../controllers/homes')

const express=require('express');
const useroute=express.Router();

const rootdir=require('../utils/pathutil');
// const registeredhomes=require('./hostroute');

// const {addedhouses,hostroute}=require('./hostroute');

useroute.get("/",homes.com2);
// useroute.get("/",(req,res)=>{
//     // res.sendFile(path.join(rootdir,"views","home.html"));
//     res.render("home",{registeredhome:addedhouses});
// })

module.exports=useroute;
