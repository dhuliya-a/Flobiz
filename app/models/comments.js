const mongoose = require('mongoose');

//var PostModel = require('post');

const CommentSchema = mongoose.Schema({
    post_id: String,//id of the post the comment belongs to
    commented_by:String,//id of the poster
    comment: String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);