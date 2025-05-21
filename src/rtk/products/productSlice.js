import { createSlice } from "@reduxjs/toolkit";
import { actGetProducts } from "./act/actGetProducts";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default ProductsSlice.reducer;
