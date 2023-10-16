const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        description: {
            type: String,
            required: [true, 'description is required'],
            minlength: [3, 'title must be 3 characters length'],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },

);

const Comment = model("Comment", commentSchema);

module.exports = Comment;