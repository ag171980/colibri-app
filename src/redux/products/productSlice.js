import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  category: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    test: (state, action) => {},
  },
});

export const { test } = productSlice.actions;

export default productSlice.reducer;
