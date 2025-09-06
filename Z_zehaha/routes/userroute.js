const path=require('path');


const express=require('express');
const useroute=express.Router();

const rootdir=require('../utils/pathutil');


useroute.get("/",(req,res)=>{
    res.sendFile(path.join(rootdir,"views","home.html"));
})

module.exports=useroute;
