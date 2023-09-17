const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to homepage")
})
app.get('/about',(req,res)=>{
    res.send(`Welcome to about ${req.query.name}`)
})

app.listen(8000,()=>console.log("Server is running"))

///same code without express

// const http = require('http')

// const myServer = http.createServer((req,res)=>{
//     switch(req.url){
//         case('/'):
//             if(req.method=='GET'){
//                 res.end("Welcome to homepage");
//             }
//             break;
//         case('/about'):
//             res.end("Welcome to about page");
//             break;
//         default:
//             res.end("Welcome to homepage");
        
//     }
// })

// myServer.listen(8000,()=>console.log("Server is running"))