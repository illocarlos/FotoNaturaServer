const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    signUpUser,
    logInUser,
    verifyUser

} = require('../controller/auth.controllers')

router.post('/signUp', signUpUser)
router.post('/logIn', logInUser)
router.get('/verify', verifyToken, verifyUser)

module.exports = router