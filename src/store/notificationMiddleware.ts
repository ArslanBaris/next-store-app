import { Middleware } from '@reduxjs/toolkit';
import { addToCart } from './cartSlice';
import { toast } from "sonner"
import { PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types/product';


const notificationMiddleware: Middleware = store => next => (action) => {
    if (addToCart.match(action)) {
        const cartAction = action as PayloadAction<CartItem>;
        toast.success(`${cartAction.payload.title}`, {description: "Added to cart!"});
    }
    return next(action);
};

export default notificationMiddleware;