const express=require('express')
const app=express();

// const joke=require('give-me-a-joke');
const fig=require('figlet')

// let jokee="";

// app.get('/',(req,res)=>{
// joke.getCustomJoke(async (joke)=>{
//     console.log(joke)
//     await res.send(joke);
// })
// })


// import figlet from "figlet";
let text;
async function doStuff() {
    text = await fig.text("Hello World!!");
  console.log(text);
}

doStuff();
app.get('/',(req,res)=>{
    // fig.res("Harsha") not there this func
})

app.listen(5000)