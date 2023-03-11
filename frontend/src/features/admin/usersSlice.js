import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import adminService from './adminService'

const initialState = {
    users: [{ _id: 1, name: 'ajay chandran', email: 'ajaychandran@gmail.com' }, { _id: 2, name: 'akhil', email: 'akhilnasim@gmail.com' }],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getUsers = createAsyncThunk('users/getAll', async(_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().admin.admin.token
        return await adminService.getUsers(token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteUser = createAsyncThunk('users/delete', async (userId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().admin.admin.token
        return await adminService.deleteUser(userId, token)
    } catch (error) {
        const message = (error.response && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const blockUser = createAsyncThunk('users/block', async (userId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().admin.admin.token
        return await adminService.blockUser(userId, token)

    } catch (error) {
        const message = (error.response && error.reponse.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
})


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getUsers.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = usersSlice.actions
export default usersSlice.reducer