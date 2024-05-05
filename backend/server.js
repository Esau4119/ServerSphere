// Express
const express = require('express');
const app = express();

// .env file access and print
require('dotenv').config();

//Hosting
const port = process.env.PORTER;
const cors = require("cors");
const router = express.Router();


//Needed for Mongo
const LogInCollection = require("./schem")

// Base express
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Session storage in Mongodb
const session = require('express-session');
const MongoStore =  new require('connect-mongo');
app.use(session({
    secret: "Mugiwara",
    saveUninitialized: true,
    resave: false,
    store:  MongoStore.create({
        mongoUrl: process.env.URI,
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native',
       
    }),
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}));


app.post('/signup',  cors(),async (req, res) => {
    // Building Json out of incoming data
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // Making a call to db to see if we have a user with provided username
    const checking = await LogInCollection.findOne({ name: req.body.username})
    console.log("REQ:",req.body);
    
    try {
        console.log("MONGO",checking);
        // if we get a result, then username is taken
        if (checking && checking.name === req.body.username ) {
            // If user already exists, send a message indicating that
            console.log("--------- FAILD ---------");
            return res.status(400).send({Fail: "User Exists"});
        } else {
            // If user doesn't exist, insert the new user data
            await LogInCollection.insertMany([data]);
            console.log("-------!!!!!!!!! ---------");

            // Storing user onto session
            req.session.user = {
                name: req.body.username
            }
            req.session.save(err => {
                if(err){
                    console.log(err);
                }
            });

            return res.status(200).send({Success: "User created successfully.",Sesh: req.session});
        }

    } catch (error) {
        console.error(error);
        
        // If an error occurs during signup process, return an error response
        return res.status(500).send("Internal Server Error.");
    }
})

app.post('/login',cors(), async (req, res) => {
    // Premade Json
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // Mongo query
    const checking = await LogInCollection.findOne({ name: req.body.username})
    console.log("REQ:",data);
    
    try {
        console.log("MONGO",checking);
        //if we have a match we need to verify pass and username
        if (checking && checking.password === req.body.password && checking.name === req.body.username) {
            console.log("-------!!!!!!!!! ---------");

            // Adding them to the session if everything checks out
            req.session.user = {
                name: req.body.username
            }
            req.session.save(err => {
                if(err){
                    console.log(err);
                }
            });
            return res.status(210).send({Success: "Bros ight",Sesh: req.session})
        }
        else {
            // Failed login
            console.log("--------- FAILD LOGIN ---------");
            return res.status(410).send({Fail: "Bad Password or User"});
        }
    }  catch (error) {
        console.error(error);
        // If an error occurs during signup process, return an error response
        return res.status(500).send("Internal Server Error.");
    }
})

app.get('/logout', (req, res, next) => {
    // not sure if this is working yet
    req.session.destroy((err) => {
      if (err) {
       console.log(err)
        next(err);
      } else {
        console.log('RIP session has taken fall damage');

        res.clearCookie('csid');
        res.json({ status: "ok", message: "User is logged out" })
      }
    })
  
  })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

module.exports = router;
