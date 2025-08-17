const express=require('express')
const router=express.Router()


router.use((req,res,next)=>{
    console.log(req.url,req.method);
    next()
})
router.use(express.urlencoded());

router.get('/',(req,res,next)=>{
    console.log(req.url,req.method);
    res.send(
        `<h1>HI</h1>
        <a href="/add-home">Add Home</a>
        `
        )
})
router.get('/add-home',(req,res,next)=>{
    res.send(

        `<h3>Register Here2</h3>
        <form action='/add-home' method='POST'>
        <input type="text" name="house" placeholder="Enter your name">
        <input type="submit" value="Submit"/>
        </form>
        `
    )
})
router.post('/add-home',(req,res,next)=>{
    console.log(req.body)
    res.send(`
        <h1>Registed succesfully</h1>
        <a href='/'>Go to Home</a>
        `)
})
module.exports=router;