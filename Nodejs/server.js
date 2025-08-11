console.log("learning server...")
let fs=require('fs');
fs.writeFile("output.md","Writing File",(err)=>{
    if(err) console.error("eroor")
    else console.log("success")
})