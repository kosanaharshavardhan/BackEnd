const path=require('path');
const rootdir=require('../utils/pathutil');

exports.getAddNewHome=(req,res)=>{
//  res.sendFile(path.join(__dirname,"../","views","addhome.html"))
 res.sendFile(path.join(rootdir,"views","addhome.html"));
}

exports.$404controller=(req,res,next)=>{
    // res.status(404).send("<h1>404 Not found</h1>")
    // res.status(404).sendFile(path.join(rootdir,"views","404.html"));
    let housename="WELL WELL WELL";
    res.status(404).render('404',{housename,title:'Page Not Found12309232310u3'});
}