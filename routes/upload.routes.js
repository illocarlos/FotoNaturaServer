const router = require("express").Router()
const imageMiddlewares = require("../middlewares/uploader.middlewares")

const {
    image,
    images
} = require('../controller/upload.controllers')

router.post('image', imageMiddlewares.single('imageData'), image)
router.post('/images', imageMiddlewares.array('imagesData', 3), images)

module.exports = router