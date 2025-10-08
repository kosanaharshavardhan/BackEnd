const work=require('./data');
const http=require('http');
const server=http.createServer(work())
server.listen(3001,()=>{
    console.log("fetching at localhost:3001/login");
})