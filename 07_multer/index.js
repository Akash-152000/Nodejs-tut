const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express();
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}- ${file.originalname}`)
    }
})

const upload = multer({storage:storage});

app.get('/',(req,res)=>{
    res.render('home')
})

app.post("/upload",upload.single('profile'),(req,res)=>{
    console.log(req.file);
    // res.render("home")
})


app.listen(8000,()=>console.log("server running"))