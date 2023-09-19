const express = require('express')
const connectToMongo = require('./connection')
const urlRouter = require('./routes/urlRouter')
const URL = require('./model/urlShort')
const path = require('path')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT = 8000

// Establish connection with MongoDB
connectToMongo()

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

//Routes
app.use('/url', urlRouter)

app.get('/test', async (req,res)=>{
    const allUrls = await URL.find({})
    return res.render("home",{
        urls: allUrls
    })
})

app.listen(PORT, ()=> console.log(`Server started on PORT:${PORT}`))