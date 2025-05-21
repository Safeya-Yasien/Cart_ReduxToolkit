import { configureStore } from "@reduxjs/toolkit";

import products from "./products/productSlice";
import cart from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    products,
    cart,
  },
});
