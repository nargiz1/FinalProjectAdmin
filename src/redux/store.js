import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';
import userReducer from './User/UserSlice';
import advertisementReducer from './Advertisement/AdvertisementSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    ad: advertisementReducer
  },
});

export default store;



