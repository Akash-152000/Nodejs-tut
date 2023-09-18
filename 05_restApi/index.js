const express = require("express");
const mongoose = require("mongoose");
const connectToMongo = require('./connection')

const userRouter = require('./routes/user')

const app = express();
const PORT = 8000;


// Connect to mongoDb database
connectToMongo()

//Middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRouter)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
