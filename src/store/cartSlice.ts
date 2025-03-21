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
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
        if (existingItem) {
            existingItem.amount += 1;
        }
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
        if (existingItem) {
            existingItem.amount -= 1;
        }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart,increaseAmount, decreaseAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;