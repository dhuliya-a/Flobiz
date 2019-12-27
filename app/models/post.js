const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    likes: Number//count of all the likes on this post,
    image_url: String,
    author: String//userid/whole user who wrote the blog
//comments. the comment object related to this  or all the comments of this post
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);