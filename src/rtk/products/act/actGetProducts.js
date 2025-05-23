import { createAsyncThunk } from "@reduxjs/toolkit";

export const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data;
  }
);
