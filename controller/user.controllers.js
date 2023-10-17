const User = require('../models/User.model')
const Comment = require('../models/Comment.model')

// usuario tiene en su modelo el comentario 

const listUsers = (req, res, next) => {
    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))

}

const userId = (req, res, next) => {

    const { user_id } = req.params
    User
        .findById(user_id)
        .populate('photo')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editUser = (req, res, next) => {
    const { user_id } = req.params
    const { userData } = req.body

    User
        .findByIdAndUpdate(user_id, userData)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

}

const addCommentOfUser = (req, res, next) => {
    const { idComment, idUser } = req.body

    Comment
        .findByIdAndUpdate(idComment, { $addToSet: { user: idUser } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))
}


const removeCommentToUser = (req, res, next) => {
    const { idComment, idUser } = req.body
    const { _id } = idUser

    Comment
        .findByIdAndUpdate(idComment, { $pull: { user: _id } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))
}



const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(204))
        .catch((err) => next(err))
}




module.exports = {
    addCommentOfUser,
    removeCommentToUser,
    listUsers,
    userId,
    editUser,
    deleteUser
}