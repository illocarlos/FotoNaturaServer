const router = require("express").Router()

const photoRoutes = ('./photo.routes')
router.use("/photo", photoRoutes)

const userRouter = ('./user.routes')
router.use("/user", userRouter)

const commentRouter = ('./comment.routes')
router.use("/comment", commentRouter)

const uploadRoutes = require('./upload.routes')
router.use("/upload", uploadRoutes)

const authRoutes = require('./auth.routes')
router.use("/auth", authRoutes)

module.exports = router
