const express = require('express')
const router = express.Router()
const {
    getUser,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
} = require('../controller/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/signup', registerUser)
router.post('/login', loginUser)
router.get('/me',protect, getUser)

router.route('/:id').delete(deleteUser).put(updateUser)


module.exports = router