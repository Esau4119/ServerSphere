// Express
// .env file access and print
require('dotenv').config();
const port = process.env.PORTER;
let gCol ;


//Needed for Mongo
const mongoose = require('mongoose');

const LogInSchema = new mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        password:{
                type:String,
                required:true
        }
})
const collection = new mongoose.model("Users",LogInSchema);


// Checking mongo
mongoose.connect(process.env.URI)
  .then(() => {
    // Retrieve all collections
    mongoose.connection.db.collections()
      .then(collections => {
        collections.forEach(collection => {
          //print in console only the names of collections
          console.log(collection.collectionName);
                      // global collection aka so i can print it later
          gCol = (collection.collectionName);
        });
      })
      //error handling
      .catch(error => {
        console.error('Error retrieving collections:', error);
      });
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = collection;
