const router = require("express").Router()

const photoRoutes = ("./photo.routes")
app.use("/photo", photoRoutes)

const userRouter = ("./user.routes")
app.use("/user", userRouter)

const commentRouter = ("./comment.routes")
app.use("comment", commentRouter)

const uploadRoutes = require('./upload.routes')
router.use("/upload", uploadRoutes)

const authRoutes = require('./auth.routes')
router.use("/auth", authRoutes)

module.exports = router
