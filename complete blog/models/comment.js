const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    author: { type: Schema.Types.ObjectId },
    content: { type: String }
})

const Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;