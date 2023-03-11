const express = require('express')
const router = express.Router()
const {
    getUser,
    loginAdmin,
    updateUser,
    deleteUser
} = require('../controller/adminController')

const {protect} = require('../middleware/authMiddleware')

router.post('/login', loginAdmin)
router.get('/me',protect, getUser)

router.route('/:id').delete(deleteUser).put(updateUser)


module.exports = router