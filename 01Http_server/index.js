const http = require('http');
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} Request registered\n`;
    fs.appendFile('log.txt',log,(err, data)=>{
        switch(req.url){
            case('/'):res.end("Hello User"); break;
            case('/about'):res.end('<h1 style="color:red">Hello world</h1>'); break;
            default:res.end('404 Page Not Found')
        }
        
    })
})

myServer.listen(8000,()=>console.log("Server running on Port:8000"))


// npm init
// create index.js
// change start script in package.json