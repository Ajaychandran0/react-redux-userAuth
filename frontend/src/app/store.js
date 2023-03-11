import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import adminReducer from '../features/admin/adminSlice'
import usersReducer from '../features/admin/usersSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    users: usersReducer
  },
});
