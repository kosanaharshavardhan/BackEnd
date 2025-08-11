const http=require('http');
function requestcall(req,res){
    console.log(req);
}
const server=http.createServer(requestcall);
server.listen(3001);