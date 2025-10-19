const express=require('express')
const app=express();

const joke=require('give-me-a-joke');

let jokee="";
joke.getCustomJoke((joke)=>{
    jokee=joke;
})
app.get('/',(req,res)=>{

    res.send(jokee)
})

app.listen(5000)