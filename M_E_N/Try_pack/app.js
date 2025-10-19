const express=require('express')
const app=express();

const joke=require('give-me-a-joke');

let jokee="";

app.get('/',(req,res)=>{
joke.getCustomJoke(async (joke)=>{
    console.log(joke)
    await res.send(joke);
})
})

app.listen(5000)