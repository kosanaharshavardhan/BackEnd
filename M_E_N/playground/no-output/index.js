// const express=require('express')
// const app=express()



// app.get('/',functio,(req,res)=>{
//     res.send("output is there")
//     // res.send("else here")
// })


// function functio(req,res,next){
//     let re=4;
//     if(re%2==0){
        
//         res.send("hi")
//     }else{
       
//     }
//         next()
// }

// app.listen(4000)
const express = require('express');
const app = express();

// middleware
function functio(req, res, next) {
  let re = 4;

  if (re % 2 === 0) {
    console.log("Even number ✅");
    // send response here and STOP
    return res.send("Hi from middleware");
  } else {
    console.log("Odd number ❌");
    // allow next route handler to run
    next();
  }
}

// route using middleware
app.get('/', functio, (req, res) => {
  res.send("Output is there (from main route)");
});

app.listen(4000, () => console.log("Server running on port 4000"));
