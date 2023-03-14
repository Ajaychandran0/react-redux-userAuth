const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/userModel')


const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields ok')
    }
    // check if user exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const loginUser = asyncHandler(async(req,res) =>{
    const {email, password} = req.body

    const user = await User.findOne({email})
    if(!user){
        res.status(400)
        throw new Error('User Not Found')
    }else if(user.isActive){
        if((await bcrypt.compare(password, user.password))){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                image_url:user.image_url,
                token: generateToken(user._id)
            })
        }else{
            res.status(400)
            throw new Error('Invalid credentials')
        }
    }else{
        res.status(400)
        throw new Error('Account Is Temporarly Suspended')
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
    const user = req.user
    console.log(req.body, 'hey this is rew.body in update user')
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    await user.updateOne({image_url: req.body.imageUrl});
    res.status(200).json(req.body.imageUrl)
})

module.exports = {
    getUser,
    registerUser,
    loginUser,
    updateUser,
   
}