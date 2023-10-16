const router = require("express").Router()

const {
    image
} = require('../controller/upload.controllers')

router.post('image', imageMiddlewares.single('imageData'), image)

module.exports = router