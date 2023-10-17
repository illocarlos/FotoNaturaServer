const Comment = require('../models/Comment.model')
const Photo = require('../models/Photo.model')

const newComment = (req, res, next) => {
    const { description } = req.body
    const { _id: user } = req.payload

    Comment

        .create({ description, user })
        .then(comment => res.json(comment))
        .catch(err => next(err))
}

const listComment = (req, res, next) => {
    Comment
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))

}


const commentId = (req, res, next) => {

    const { comment_id } = req.params
    Photo
        .findById(comment_id)
        .populate('user')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const addCommentToPhoto = (req, res, next) => {

    const { idPhoto, idComment: comment } = req.body

    Photo
        .findByIdAndUpdate(idPhoto, { $addToSet: { comment } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))

}

const deleteComment = (req, res, next) => {


    const { idUser, idPhoto: photos } = req.body

    User
        .findByIdAndUpdate(idUser, { $pull: { photos } }, { new: true })
        .then((response) => {

            res.status(201).send("ok")
        })
        .catch(err => {
            next(err)
        })
}






module.exports = {
    addCommentToPhoto,
    listComment,
    newComment,
    commentId,
    deleteComment

}