const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/login'){
    res.setHeader('Content-Type','text/html')
    res.write('<form action="/login" method="POST"><input type="text" name="username" placeholder="Username" required> <input type="password" name="password" placeholder="Password" required> <button type="submit">Login</button></form>')
    return res.end();    
    }
})
server.listen(3001,()=>{
    console.log("fetching at localhost:`3001`");
})