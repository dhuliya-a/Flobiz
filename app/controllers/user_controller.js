const User = require('../models/users.js');
const mongoose = require('mongoose');
// Create and Save a new user
exports.create = (req, res) => {
    
    //Validate request
    if(!req.body.email) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }

    // Create a user
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio,
        gender: req.body.gender||"Unspecified",
        age: req.body.age,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });

    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};
// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(({"_id":mongoose.Types.ObjectId(req.params.userId)}))
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};
// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.email) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(({"_id":mongoose.Types.ObjectId(req.params.userId)}), {
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio,
        gender: req.body.gender,
        age: req.body.age,
        first_name: req.body.first_name,
        last_name: req.body.last_name

    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(({"_id":mongoose.Types.ObjectId(req.params.userId)}))
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};