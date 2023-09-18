const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
      require: true,
    },
    job_title: {
      type: String,
      require: true,
    },
  });
  
  const User = mongoose.model("user", userSchema);

  module.exports = User;