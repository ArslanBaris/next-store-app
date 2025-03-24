import { CartItem } from '@/types/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount += action.payload.amount;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateAmount: (state, action: PayloadAction<{ id: number; amount: number }>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (action.payload.amount > 0) {
          existingItem.amount = action.payload.amount;
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;