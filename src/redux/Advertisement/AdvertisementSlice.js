import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
  ad: {}
};

export const advertisementSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    setAds(state, action) {
      state.ads = action.payload;
    },
    setAd(state, action) {
      state.ad = action.payload;
    }
  },
});

export const { setAds, setAd } = advertisementSlice.actions;

export default advertisementSlice.reducer;