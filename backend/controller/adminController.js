const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../model/adminModel')


const loginAdmin = asyncHandler(async(req,res) =>{
    const {email, password} = req.body

    const admin = await Admin.findOne({email})

    if(admin && (await bcrypt.compare(password, admin.password))){
        res.json({
            _id: admin.id,
            email: admin.email,
            token: generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// generate JWT
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}



const getUser = asyncHandler(async (req, res) => {
    
    res.status(200).json(req.user)
})

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedUser)
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove()
})
module.exports = {
    getUser,
    loginAdmin,
    updateUser,
    deleteUser
}