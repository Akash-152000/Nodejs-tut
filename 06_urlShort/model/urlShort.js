const mongoose = require('mongoose')


const urlSchema = new mongoose.Schema({
    urlShortCode:{
        type:String,
        require:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        require:true
    },
    activityOnUrl:[{timestamp:{type:Number}}]
},{timestamps:true})

const URL = mongoose.model("url",urlSchema)

module.exports = URL;