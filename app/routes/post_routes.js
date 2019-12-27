
const express = require('express');
var router = express.Router();

const posts = require('../controllers/post_controller.js');

router.post('/posts', posts.create)
router.get('/posts', posts.findAll)
router.get('/posts/:postId', posts.findOne)
router.put('/posts/:postId', posts.update)
router.delete('/posts/:postId', posts.delete);

module.exports = router





// module.exports = (app) => {
//     const posts = require('../controllers/post_controller.js');

//     // Create a new post
//     app.post('/posts', posts.create);

//     // Retrieve all posts
//     app.get('/posts', posts.findAll);

//     // Retrieve a single post with postId
//     app.get('/posts/:postId', posts.findOne);

//     // Update a post with postId
//     app.put('/posts/:postId', posts.update);

//     // Delete a post with postId
//     app.delete('/posts/:postId', posts.delete);
// }