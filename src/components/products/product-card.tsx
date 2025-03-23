"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {Star } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { Product } from "@/types/product";
import Price from "../ui/price";
import { useRouter } from "next/navigation";

function ProductCard({ product }: { product: Product }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            amount: 1,
        }));
    };

    return (
        <>
            <div className="relative group">
                    <div className="group flex flex-col gap-2 md:p-4 border p-4 rounded-lg shadow-lg" onClick={() => { router.push(`/products/${product.id}`); }}>
                        <div className="p-2">
                            <div className="relative aspect-[12/10] overflow-hidden rounded-sm">
                                <Image
                                    className="bg-white object-contain p-4 transition duration-500 ease-out group-hover:scale-110"
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <h3 className="line-clamp-2 min-h-[2lh] text-sm font-semibold">
                                {product.title}
                            </h3>
                          
                            <div className="flex items-center justify-center gap-1 text-yellow-500">
                                <Star className="w-4 h-4 " />
                                <span className="text-sm font-medium">{product.rating.rate}</span>
                                <span className="text-xs text-gray-500">({product.rating.count})</span>
                            </div>
                            <div className="flex justify-center">
                                <Price className="text-green-700 font-semibold" value={product.price} />
                            </div>

                            <div className="flex flex-row gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button className="w-full" variant={"success"} onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}>
                                    Add to Cart
                                </Button>
                            </div>

                        </div>
                    </div>
               
            </div>
        </>
    );
}

export default React.memo(ProductCard);