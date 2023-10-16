const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
            minlength: [3, 'title must be 3 characters length'],
            maxlength: [20, 'title must be 20 characters length']
        },
        Image: {
            type: String,
            required: [true, 'Image is required']
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }

    },

);

const Photo = model("Photo", photoSchema);

module.exports = Photo;