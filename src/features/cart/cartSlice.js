import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] }, // { productId, quantity }
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload; // extract minimal info
      const existing = state.items.find(item => item.productId === productId);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;