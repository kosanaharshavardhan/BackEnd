const express=require('express')
const app=express()
const router=require('./routes/useroot')
const path=require('path')
// app.use("/coomon",router)
app.use(router)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","e404.html"))
    // res.status(404).send("<h1>404 Not found</h1>")
})
// app.use((req,res,next)=>{
//     console.log(req.url,req.method);
//     next()
// })
// app.use(express.urlencoded());

// app.get('/',(req,res,next)=>{
//     console.log(req.url,req.method);
//     res.send(
//         `<h1>HI</h1>
//         <a href="/add-home">Add Home</a>
//         `
//         )
// })
// app.get('/add-home',(req,res,next)=>{
//     res.send(

//         `<h3>Register Here2</h3>
//         <form action='/add-home' method='POST'>
//         <input type="text" name="house" placeholder="Enter your name">
//         <input type="submit" value="Submit"/>
//         </form>
//         `
//     )
// })
// app.post('/add-home',(req,res,next)=>{
//     console.log(req.body)
//     res.send(`
//         <h1>Registed succesfully</h1>
//         <a href='/'>Go to Home</a>
//         `)
// })

app.listen(3001,()=>{
    console.log("server initiated")
})