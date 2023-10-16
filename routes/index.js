const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const photoRoutes = ("./photo.routes")
app.use("/photo", photoRoutes)

const userRouter = ("./user.routes")
app.use("/user", userRouter)

const commentRouter = ("./comment.routes")
app.use("comment", commentRouter)

const uploadRoutes = require('./upload.routes')
router.use("/upload", uploadRoutes)

module.exports = router
