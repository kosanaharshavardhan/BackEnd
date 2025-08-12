const http=require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url==='/login'){
    res.setHeader('Content-Type','text/html')
    res.write('<form action="/next" method="POST"><input type="text" name="username" placeholder="Username" required> <input type="password" name="password" placeholder="Password" required> <button type="submit">Login</button></form>')
    return res.end();    
    }
    else if(req.url==="/next" && req.method==="POST"){
        // fs.writeFileSync('user.txt','harshas text');
        res.statusCode=302;
        res.setHeader('Location','/login')
        // res.end()
        let  body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);

        })
        req.on('end',()=>{
            let data=Buffer.concat(body).toString();
            console.log(Buffer.concat(body).toString());
            let params=new URLSearchParams(data);
            let obj=Object.fromEntries(params);
            // for(const [key,value] of params.entries()){
            //     obj[key]=value;
            // }
            console.log(obj);
            fs.writeFileSync("user.txt",JSON.stringify(obj))
        })
        res.end()
    }
         
    
})
server.listen(3001,()=>{
    console.log("fetching at localhost:`3001`");
})