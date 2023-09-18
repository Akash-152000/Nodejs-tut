const express = require('express')
const connectToMongo = require('./connection')
const urlRouter = require('./routes/urlRouter')

const app = express()
app.use(express.json())
const PORT = 8000

// Establish connection with MongoDB
connectToMongo()

//Routes

app.use('/url', urlRouter)

app.listen(PORT, ()=> console.log(`Server started on PORT:${PORT}`))