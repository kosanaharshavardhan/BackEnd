const path=require('path');


const express=require('express');
const useroute=express.Router();

const rootdir=require('../utils/pathutil');
// const registeredhomes=require('./hostroute');

const {addedhouses,hostroute}=require('./hostroute');

useroute.get("/",(req,res)=>{
    // res.sendFile(path.join(rootdir,"views","home.html"));
    res.render("home",{registeredhome:addedhouses});
})

module.exports=useroute;
