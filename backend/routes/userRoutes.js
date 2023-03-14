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

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/',protect, getUser)
router.put('/',protect,updateUser)



module.exports = router