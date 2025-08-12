const http=require('http');
function requestcall(req,res){
    console.log(req);
    console.log(req, req.method,req.headers)
    if(req.url==='/'){

        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<title>My response</title>')
        res.write('<body><h1>Hello WOrld</h2></body>')
        res.write('</html>')
        res.end()
    }else if(req.url==='/about'){
         
        
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<title>My response</title>')
        res.write('<body><h1>about</h2></body>')
        res.write('</html>')
        res.end()
    }else{
         res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<title>My response</title>')
        res.write('<body><h1>about</h2></body>')
        res.write('</html>')
        res.end()
    }
    process.exit();
}
const server=http.createServer(requestcall);
server.listen(3001,()=>{
    console.log("fetching at 3001")
});