const http=require('http');
const work=require('./workspace')
const server=http.createServer(work)
server.listen(3001,()=>{
    console.log("server running at 3001 port...");
})