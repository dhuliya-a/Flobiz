const Post = require('../models/post.js');
const mongoose = require('mongoose');
// Create and Save a new post
exports.create = (req, res) => {
    //Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "post content can not be empty"
        });
    }
console.log(req.params);
    // Create a post
    const post = new Post({
        title: req.body.title || "Untitled post",
        description: req.body.description, 
        content: req.body.content,
        likes: req.body.likes,
        image_url: req.body.image_url,
        author: req.userId

    });

    // Save post in the database
    post.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the post."
        });
    });
};

// Retrieve and return all posts from the database.
exports.findAll = (req, res) => {
    Post.find()
    .then(posts => {
        res.send(posts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving posts."
        });
    });
};
// Find a single post with a postId
exports.findOne = (req, res) => {
    Post.findById(({"_id":mongoose.Types.ObjectId(req.params.postId)}))
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "post not found with id " + req.params.postId
            });            
        }
        res.send(post);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving post with id " + req.params.postId
        });
    });
};
// Update a post identified by the postId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "post content can not be empty"
        });
    }

    // Find post and update it with the request body
    Post.findByIdAndUpdate(({"_id":mongoose.Types.ObjectId(req.params.postId)}), {
        title: req.body.title || "Untitled post",
        description: req.body.description,
        content: req.body.content,
        likes: req.body.likes,
        image_url: req.body.image_url,
        author: req.userId

    }, {new: true})
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "post not found with id " + req.params.postId
            });
        }
        res.send(post);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Error updating post with id " + req.params.postId
        });
    });
};

// Delete a post with the specified postId in the request
exports.delete = (req, res) => {
    Post.findByIdAndRemove(({"_id":mongoose.Types.ObjectId(req.params.postId)}))
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "post not found with id " + req.params.postId
            });
        }
        res.send({message: "post deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "post not found with id " + req.params.postId
            });                
        }
        return res.status(500).send({
            message: "Could not delete post with id " + req.params.postId
        });
    });
};