const express = require('express');
var router = express.Router();

const users = require('../controllers/user_controller.js');

    // Create a new user
    router.post('/', users.create);

    // Retrieve all users
    router.get('/', users.findAll);

    // Retrieve a single user with userId
    router.get('/:userId', users.findOne);

    // Update a user with userId
    router.put('/:userId', users.update);

    // Delete a user with userId
    router.delete('/:userId', users.delete);

module.exports = router

// module.exports = (app) => {
//     const users = require('../controllers/user_controller.js');

//     // Create a new user
//     app.post('/users', users.create);

//     // Retrieve all users
//     app.get('/users', users.findAll);

//     // Retrieve a single user with userId
//     app.get('/users/:userId', users.findOne);

//     // Update a user with userId
//     app.put('/users/:userId', users.update);

//     // Delete a user with userId
//     app.delete('/users/:userId', users.delete);
// }

