export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface CartItem {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
}