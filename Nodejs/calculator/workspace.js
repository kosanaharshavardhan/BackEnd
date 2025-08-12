const add=require('./addition');

let worker=(req,res)=>{
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('Click Here for calculator:')
        res.write('<a href=/calculator>Go to Calculator</a>')
        return res.end();
    }
    else if(req.url==='/calculator'){
        res.setHeader('Content-Type','text/html');
        res.write(
            ' <form action="/result" method="post"><label for="input1">input1</label><input type="text" id="input1" name="input1" required><label for="input2">Input2</label><input type="text" id="input2" name="input2" required><button type="submit">Submit</button></form>')
        return res.end();
    }
    else if(req.url==='/result' && req.method==='POST'){
        let data=[];
        req.on('data',(chunk)=>{
            data.push(chunk);
        })
        req.on('end',()=>{
            let parsedata=Buffer.concat(data).toString();
            let parser=new URLSearchParams(parsedata);
            let obj={};
            // Object.fromEntries(parsedata);
            for(const [key,value] of parser.entries()){
                obj[key]=value;
            }
            res.setHeader('Content-Type','text/html')
            res.write(add(obj));
            res.end();
        })

    }
}
module.exports=worker