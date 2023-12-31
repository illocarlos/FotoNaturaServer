const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
    {
        description: {
            type: String,
            required: [true, 'description is required'],
            minlength: [5, 'title must be 5 characters length'],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    },

);

const Comment = model("Comment", commentSchema);

module.exports = Comment;