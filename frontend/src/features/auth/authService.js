// Services are strictly for making http requests, sending data back and setting data in localStorage

import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

// Register user
const register = async (userData) => {
    // console.log(response)
    try {
        const response = await axios.post(API_URL + "register", userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

// Login user
const login = async (userData) => {
    try {
        const response = await axios.post(API_URL + 'login', userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

// Logout User
const logout = () => {
    localStorage.removeItem('user')
}

// change user image
const changeUserImage = async (imageUrl, token) => {
    try {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.put(API_URL , {imageUrl}, config)
        console.log(response.data,' hey this is in change user image')
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

// get user data
const getUserData = async (token) => {
    try {
        console.log(token, 'thins is token in getUsersata')
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(API_URL, config)
        console.log(response,'response in getuserdata')
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


const authService = {
    register,
    logout,
    login,
    changeUserImage,
    getUserData
}

export default authService