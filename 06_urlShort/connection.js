const mongoose = require('mongoose')

const connectToMongo = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/urlShort")
    .then(()=>console.log("MongoDb connected"))
    .catch((err)=>console.log("Error in MongoDb connection",err))
}

module.exports = connectToMongo;