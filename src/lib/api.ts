import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

const headers = {
    'Content-Type': 'application/json',
};

export const fetchProducts = async (category?: string) => {
    const categoryFilter = category ? `/category/${category}` : '';
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}products/${categoryFilter}`, { headers, });
    return response.data;
};

export const fetchProductById = async (productId: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}products/${productId}`, { headers });
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}products/categories`, { headers });
    return response.data;
};

export const fetchProductsQuery = async (queryClient: QueryClient, category?: string) => {
    await queryClient.prefetchQuery({
        queryKey: ['products', category],
        queryFn: () => fetchProducts(category),
    });
};
