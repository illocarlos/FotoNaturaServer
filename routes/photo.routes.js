const router = require("express").Router()

const {
    deletePhoto,
    addPhotoToUser,
    newPhoto,
    listPhoto,
    photoId,

} = require('../controller/photo.controllers')


router.get('/listPhoto', listPhoto)

router.get('/:photo_id', photoId)

router.post('/newPhoto', newPhoto)

router.post('/addPhotoToUser', addPhotoToUser)

router.post('/deletedPhoto', deletePhoto)

module.exports = router