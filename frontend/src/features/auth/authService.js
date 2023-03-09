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

const authService = {
    register,
    logout,
    login
}

export default authService