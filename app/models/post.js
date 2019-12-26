const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    likes: Number,
    image_url: String,
    author: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);