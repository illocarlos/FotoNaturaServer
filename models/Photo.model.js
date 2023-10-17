const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
            minlength: [3, 'title must be 3 characters length'],
            maxlength: [20, 'title must be 20 characters length']
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
            validate: {
                validator: value => value.length > 0,
                message: 'At least one photo is required'
            }
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }]

    },

);

const Photo = model("Photo", photoSchema);

module.exports = Photo;