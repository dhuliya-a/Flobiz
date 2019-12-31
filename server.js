
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
const path=require("path");
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// // Configuring the database
// const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/blogapp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/blogapp/index.html'));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  


// Require Posts routes
//require('./app/routes/post_routes.js')(app);
app.use('/user/:userId', function(req,res,next){
req.userId=req.params.userId;
next();
},require('./app/routes/post_routes.js'))

//Require User Routes
//require('./app/routes/user_routes.js')(app);
app.use('/user', require('./app/routes/user_routes.js'))


//Require Comment Routes
// require('./app/routes/comment_routes.js')(app);

// app.use('/user/:userId/post/:postId', function(req,res,next){
//     req.userId=req.params.userId;
//     req.postId=req.params.postId;
//     next();
//     } ,require('./app/routes/comment_routes.js'))


//for the feed. all the posts and their comments.
app.use('/posts/:postId', require('./app/routes/comment_routes.js'))

// listen for requests
app.listen(process.env.PORT||8080, () => {
    console.log("Server is listening on port 3000");
});