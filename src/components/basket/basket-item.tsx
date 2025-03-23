'use client';
import { updateAmount, removeFromCart } from "@/store/cartSlice";
import { CartItem } from "@/types/product";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import Price from "../ui/price";


const BasketItem = ({ item }: { item: CartItem }) => {

    const { id, title, image, price, amount } = item;

    const dispatch = useDispatch();

    const removeItem = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateAmount = (id: number, amount: number) => {
        dispatch(updateAmount({ id, amount }));
    }

    return (
        <div className="flex gap-x-4 lg:px-3 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[130px] flex items-center gap-x-4">
                <Link href={`/products/${id}`}>
                    <Image src={image} alt={title} width={80} height={80} />
                </Link>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between mb-2 gap-4">
                        <Link
                            href={`/product/${id}`}
                            className="text-sm font-medium max-w-[350px] text-primary hover:underline line-clamp-2"
                        >
                            {title}
                        </Link>
                        <div
                            onClick={() => removeItem(id)}
                            className="text-xl cursor-pointer"
                        >
                            <X className="text-gray-500 hover:text-red-500 transition" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 h-[36px] text-sm items-center">
                        <div className="flex flex-1 max-w-[100px] items-center h-7 border text-primary font-medium">
                            <div onClick={() => handleUpdateAmount(id, amount - 1)} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                                <Minus size={14} />
                            </div>
                            <div className="h-full flex font-normal justify-center items-center px-2">
                                {amount}
                            </div>
                            <div onClick={() => handleUpdateAmount(id, amount + 1)} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                                <Plus size={14} />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex flex-1 items-center whitespace-nowrap">
                            <Price value={price} />
                        </div>
                        {/* total price */}
                        <div className="flex flex-1 justify-end items-center text-primary font-medium whitespace-nowrap">
                            <Price value={price * amount} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;