const express = require('express');

var router = express.Router();

const comments = require('../controllers/comment_controller.js');

router.post('/comments', comments.create)
router.get('/comments', comments.findAll)
router.get('/comments/:commentId', comments.findOne)
router.put('/comments/:commentId', comments.update)
router.delete('/comments/:commentId', comments.delete);

module.exports = router



// module.exports = (app) => {
//     const comments = require('../controllers/comment_controller.js');

//     // Create a new comment
//     app.post('/comments', comments.create);

//     // Retrieve all comments
//     app.get('/comments', comments.findAll);

//     // Retrieve a single comment with commentId
//     app.get('/comments/:commentId', comments.findOne);

//     // Update a comment with commentId
//     app.put('/comments/:commentId', comments.update);

//     // Delete a comment with commentId
//     app.delete('/comments/:commentId', comments.delete);
// }
