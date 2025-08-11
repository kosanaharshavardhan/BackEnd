const http=require('http');
function requestcall(req,res){
    console.log(req);
}
const server=http.createServer(requestcall);
server.listen(3001,()=>{
    console.log("fetching at 3001")
});