const path=require('path');
const homes=require('../controllers/homes')
const express=require('express');
const hostroute=express.Router();

const rootdir=require('../utils/pathutil');


hostroute.get("/add-home",homes.getAddNewHome)
// const addedhouses=[];
hostroute.post("/add-home",homes.com);
// hostroute.post("/add-home",(req,res)=>{
//      // res.send(

//     //     `<h3>Register Here2</h3>
//     //     <form action='/add-home' method='POST'>
//     //     <input type="text" name="house" placeholder="Enter your name">
//     //     <input type="submit" value="Submit"/>
//     //     </form>
//     //     `
//     // )
//     // console.log(req.body);
//     res.sendFile(path.join(rootdir,"views","homeadded.html"));
//     addedhouses.push(req.body); 
//     console.log(addedhouses);
// })
// module.exports=addedhouses;
// module.exports=hostroute;
module.exports={
// addedhouses:addedhouses,
hostroute:hostroute
};