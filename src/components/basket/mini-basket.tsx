'use client';
import { ShoppingBasketIcon, ShoppingCart, Trash, X } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import BasketItem from "./basket-item";
import { Badge } from "../ui/badge";
import { clearCart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";
import { PopoverClose } from "@radix-ui/react-popover";
import { twJoin } from "tailwind-merge";

export function MiniBasket() {
    const dispatch = useDispatch();
    const router = useRouter();

    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Drawer direction="right" >
            <DrawerTrigger asChild>
                <div className="relative cursor-pointer p-2 rounded-full hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50" >
                    <ShoppingBasketIcon size={25} />
                    <Badge className="absolute -bottom-1 -right-1 text-[11px] w-[20px] h-[19px]" variant={"destructive"} >{totalItems}</Badge>
                </div>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col h-full !w-screen sm:!w-auto">
                <DrawerHeader>
                    <div className="flex justify-between items-center">
                        <DrawerTitle>Basket ({totalItems})</DrawerTitle>
                        <DrawerClose asChild>
                            <Button className="rounded-full" variant="ghost" size={"icon"}><X /></Button>
                        </DrawerClose>
                    </div>
                    <DrawerDescription>Your selected items</DrawerDescription>
                </DrawerHeader>
                <div className="mx-auto sm:max-w-sm w-full flex-grow overflow-y-auto">

                    <div className="flex flex-col gap-2 p-4">
                        {cartItems.length > 0 ? (
                            cartItems.map(item => (
                                <BasketItem key={item.id} item={item} />
                            ))
                        ) : (
                            <div className="text-center text-gray-500 min-h-[300px] items-center flex flex-col justify-center gap-2">
                                <ShoppingCart />
                                Your basket is empty
                            </div>
                        )}
                    </div>
                </div>
                <DrawerFooter className="mt-auto">
                    <div className="flex justify-between items-center font-bold  h-9">
                        <div className="flex items-center gap-2">
                            <span>Total:</span>
                            <span>$ {totalPrice.toFixed(2)}</span>
                        </div>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={twJoin(!totalItems && "hidden", "text-xl cursor-pointertext-gray-500 hover:text-red-500 transition")}
                                >
                                    <Trash />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="mx-2">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold">Clear Basket</h3>
                                    <p>Are you sure you want to clear your basket?</p>
                                    <div className="flex justify-end gap-2">
                                        <PopoverClose asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </PopoverClose>
                                        <PopoverClose asChild>
                                            <Button variant="destructive" onClick={() => handleClearCart()}>Clear</Button>
                                        </PopoverClose>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>



                    </div>
                    <DrawerClose asChild>
                        <Button onClick={() => { router.push("/basket") }} >View Cart</Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                        <Button variant="outline">Continue to Shopping</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
