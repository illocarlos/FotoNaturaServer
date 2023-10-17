const Photo = require('../models/Photo.model')
const User = require('../models/User.model')

const newPhoto = (req, res, next) => {
    const { title, image } = req.body

    Photo
        .create({ title, image })
        .then(photo => res.json(photo))
        .catch(err => next(err))

}

const listPhoto = (req, res, next) => {
    Photo
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const photoId = (req, res, next) => {

    const { photo_id } = req.params
    Photo
        .findById(photo_id)
        .populate('comment')
        .then(response => res.json(response))
        .catch(err => next(err))
}


const addPhotoToUser = (req, res, next) => {

    const { idUser, idPhoto: photos } = req.body

    User
        .findByIdAndUpdate(idUser, { $addToSet: { photos } }, { new: true })
        .then(() => res.status(201).send("ok"))
        .catch(err => next(err))

}
const deletePhoto = (req, res, next) => {


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
    deletePhoto,
    addPhotoToUser,
    newPhoto,
    listPhoto,
    photoId,

}