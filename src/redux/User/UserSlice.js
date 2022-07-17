import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  users:[],
  userById: ""
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUserById(state, action) {
      state.userById= action.payload;
    },
  
  },
});

export const { setCurrentUser,setUsers,setUserById } = userSlice.actions;

export default userSlice.reducer;