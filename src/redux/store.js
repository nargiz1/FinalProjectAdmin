import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import userReducer from './User/UserSlice';
import advertisementReducer from './Advertisement/AdvertisementSlice';
import postReducer from './Post/PostSlice';
import commentReducer from './Comment/CommentSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    ad: advertisementReducer,
    post: postReducer,
    comment: commentReducer
  },
});

export default store;



