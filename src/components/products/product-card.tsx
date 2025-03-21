"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            amount: 1,
        }));
        console.log("Added to Cart:", product);
    };

    return (
        <>
            <div className="relative group">
                <Link href={`/products/${product.id}`}>
                    <div className="group flex flex-col gap-2 md:p-4 border p-4 rounded-lg shadow-lg  bg-white">
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
                            <h3 className="line-clamp-3 min-h-[3lh] text-sm font-bold">
                                {product.title}
                            </h3>
                            <div className="mt-2">
                                <span className="text-gray-700 font-light">
                                    ${product.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <div className="absolute top-3 right-3">
                    <Button variant={"outline"} size={"sm"} onClick={handleAddToCart}>
                        <Plus />
                    </Button>
                </div>
            </div>
        </>
    );
}
