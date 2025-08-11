console.log("learning server...")
let fs=require('fs');
console.log(typeof fs)
fs.writeFile("output.md","Writing File",(err)=>{
    if(err) console.error("eroor")
    else console.log("success")
})
// repl read evaluate print loop