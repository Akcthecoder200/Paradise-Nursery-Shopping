import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // [{ plantDetail, quantity }]
  },
  reducers: {
    addToCart: (state, action) => {
      const plantDetail = action.payload;
      const existing = state.items.find(
        (item) => item.plantDetail.id === plantDetail.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ plantDetail, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { plantId, newQuantity } = action.payload;
      const item = state.items.find((item) => item.plantDetail.id === plantId);
      if (item) {
        item.quantity = Math.max(1, newQuantity);
      }
    },
    removeFromCart: (state, action) => {
      const plantId = action.payload;
      state.items = state.items.filter(
        (item) => item.plantDetail.id !== plantId
      );
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
