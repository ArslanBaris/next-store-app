export interface Product {
    id: string;
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
    id: string;
    title: string;
    image: string;
    price: number;
    amount: number;
}