const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.setHeader('Content-Type','text/html');
        res.write(
            '<h1 style="font-size:100px">Welocom to Home</h1>'
        )
        return res.end();
    }
     if(req.url=='/men'){
        res.setHeader('Content-Type','text/html');
        res.write(
            '<h1 style="font-size:100px">Welocom to Men section</h1>'
        )
        return res.end();
        
    }
     if(req.url=='/women'){
        res.setHeader('Content-Type','text/html');
        res.write(
            '<h1 style="font-size:100px">Welocom to women section</h1>'
        )
        return res.end();
    }
     if(req.url=='/kids'){
        res.setHeader('Content-Type','text/html');
        res.write(
            '<h1 style="font-size:100px">Welocom to kids section</h1>'
        )
        return res.end();
    }
     if(req.url=='/cart'){
        res.setHeader('Content-Type','text/html');
        res.write(
            '<h1 style="font-size:100px">Welocom to cart section</h1>'
        )
        return res.end();
    }
});
server.listen(3002);