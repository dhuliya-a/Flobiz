module.exports = (app) => {
    const posts = require('../controllers/post_controller.js');

    // Create a new post
    app.post('/posts', posts.create);

    // Retrieve all posts
    app.get('/posts', posts.findAll);

    // Retrieve a single post with postId
    app.get('/posts/:postId', posts.findOne);

    // Update a post with postId
    app.put('/posts/:postId', posts.update);

    // Delete a post with postId
    app.delete('/posts/:postId', posts.delete);
}