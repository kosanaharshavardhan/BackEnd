const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/login'){
    res.setHeader('Content-Type','text/html')
    res.write('<form action="/next" method="POST"><input type="text" name="username" placeholder="Username" required> <input type="password" name="password" placeholder="Password" required> <button type="submit">Login</button></form>')
    return res.end();    
    }
    else if(req.url==="/next" && req.method==="POST"){
        fs.writeFileSync('user.txt','harshas text');
        res.statusCode=302;
        res.setHeader('Location','/login')
        res.end()
    }
         
    
})
server.listen(3001,()=>{
    console.log("fetching at localhost:`3001`");
})