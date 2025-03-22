'use client';
import { decreaseAmount, increaseAmount, removeFromCart } from "@/store/cartSlice";
import { CartItem } from "@/types/product";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import Price from "../ui/price";


const BasketItem = ({ item }: { item: CartItem }) => {

    const { id, title, image, price, amount } = item;

    const dispatch = useDispatch();

    const removeItem = (id: any) => {
        dispatch(removeFromCart(id));
    };

    const updateAmount = (id: any, type: string) => {
        switch (type) {
            case "increase":
                dispatch(increaseAmount(id));
                break;
            case "decrease":
                dispatch(decreaseAmount(id));
                break;
            default:
                break;
        }
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
                            className="text-sm font-medium max-w-[350px] text-primary hover:underline"
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
                    <div className="flex gap-x-4 h-[36px] text-sm">
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                            <div onClick={() => updateAmount(id, "decrease")} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                                <Minus size={14} />
                            </div>
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>
                            <div onClick={() => updateAmount(id, "increase")} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                                <Plus size={14} />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex flex-1 items-center">
                            <Price value={price} />
                        </div>
                        {/* total price */}
                        <div className="flex flex-1 justify-end items-center text-primary font-medium">
                            <Price value={price * amount} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;