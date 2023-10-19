const router = require("express").Router()

const {
    addCommentToPhoto,
    listComment,
    newComment,
    commentId,
    deleteComment

} = require('../controller/comment.controllers')


router.get('/list', listComment)

router.get('/:comment_id', commentId)

router.post('/newComment', newComment)

router.post('/addCommentToPhoto', addCommentToPhoto)

router.post('/deleteComment', deleteComment)


module.exports = router