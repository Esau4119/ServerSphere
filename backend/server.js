// Express
const express = require('express');
const app = express();
// .env file access and print
require('dotenv').config();

const port = process.env.PORTER;
const cors = require("cors");
const router = express.Router();
let gCol ;
//Needed for Mongo
const mongoose = require('mongoose');

// Base express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// custom API route
app.get("/weOk", cors(), async (req, res, next) => {
    res.send("LOL");
});

//base route
app.get("/", cors(), async (req, res, next) => {
    res.send(`Alright the db only got:\n\t${gCol}`);
});


// Checking mongo
mongoose.connect(process.env.URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server & DB GOOD\n PORT:\t${port}`);
    });

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

module.exports = router;
