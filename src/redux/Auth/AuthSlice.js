import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.token = action.payload;
    }
  },
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
