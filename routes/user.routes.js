const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const {
    addCommentOfUser,
    removeCommentToUser,
    listUsers,
    userId,
    editUser,
    deleteUser

} = require('../controller/user.controllers')

router.delete('/delete/:user_id', verifyToken, deleteUser)

router.post('/edit/:user_id', verifyToken, editUser)

router.post('/addCommentUser', addCommentOfUser)

router.post('/deleteCommentUser', removeCommentToUser)

router.get('/list', listUsers)

router.get('/:user_id', userId)


module.exports = router