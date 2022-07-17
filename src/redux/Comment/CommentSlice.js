import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  comment:{}
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments (state, action) {
      state.comments = action.payload;
    },
    setComment (state, action) {
      state.comment = action.payload;
    }
  },
});

export const {setComments,setComment} = commentSlice.actions;

export default commentSlice.reducer;
