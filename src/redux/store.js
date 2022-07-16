import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import userReducer from './User/UserSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;



