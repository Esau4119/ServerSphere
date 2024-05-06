// Express
// .env file access and print
require('dotenv').config();

//Needed for Mongo
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        Message:{
                type:String,
                required:true
        }
})
const collection = new mongoose.model("Messages",MessageSchema);
mongoose.connect(process.env.URI)
  .then(() => {
    // Retrieve all collections
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = collection;
