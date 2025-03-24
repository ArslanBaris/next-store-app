"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api";
import ProductCard from "./product-card";
import { Product } from "@/types/product";

export default function ProductList({ category }: { category?: string }) {

    const { data: products } = useQuery({
        queryKey: ["products", category],
        queryFn: () => fetchProducts(category),
    });

    return (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {products?.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    );
}
