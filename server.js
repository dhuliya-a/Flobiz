const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Channel."});
});
// Require Posts routes
//require('./app/routes/post_routes.js')(app);
app.use('/user/:userId', require('./app/routes/post_routes.js'))

//Require User Routes
//require('./app/routes/user_routes.js')(app);
app.use('/user', require('./app/routes/user_routes.js'))


//Require Comment Routes
// require('./app/routes/comment_routes.js')(app);
app.use('/user/:userId/post/:postId', require('./app/routes/comment_routes.js'))

app.use('/post/:postId', require('./app/routes/comment_routes.js'))

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});