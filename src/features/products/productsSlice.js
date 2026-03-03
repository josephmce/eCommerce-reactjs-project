import { createSlice } from "@reduxjs/toolkit";

// Initial product data
const initialState = {
  items: [
    { id: 1, name: "Protein Powder", price: 29.99 },
    { id: 2, name: "Creatine Monohydrate", price: 19.99 },
    { id: 3, name: "Pre-Workout", price: 24.99 },
    { id: 4, name: "BCAA", price: 14.99 },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, // no actions needed (yet)
});

export default productsSlice.reducer;