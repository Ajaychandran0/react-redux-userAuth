// Services are strictly for making http requests, sending data back and setting data in localStorage

import axios from 'axios'

const API_URL = 'http://localhost:5000/api/admin/'

// Login Admin
const login = async (adminData) => {
    try {
        const response = await axios.post(API_URL + 'login', adminData)

        if (response.data) {
            localStorage.setItem('admin', JSON.stringify(response.data))
        }
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

// Logout Admin
const logout = () => {
    localStorage.removeItem('admin')
}

// get user

const getUsers = async (token) => {
    try {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(API_URL, config)
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

// block user
const blockUser = async (userId, token) => {
    try {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.put(API_URL + `user/${userId}`, config)
        return response.data

    } catch (error) {
        throw new Error(error.response.data.message)
    }

}

// delete user
const deleteUser = async (userId, token) => {
    try {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.delete(API_URL + `/user/${userId}`, config)
        return response.data
        
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

// filter user
const filterUser = async (search, token) => {
    try {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.post(API_URL + `/user/search`, {search}, config)
        return response.data
        
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

const adminService = {
    logout,
    login,
    blockUser,
    deleteUser,
    getUsers,
    filterUser
}

export default adminService