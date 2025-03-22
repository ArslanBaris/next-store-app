import { Product } from '@/types/product';
import axios from 'axios';
import { CategoryFilter } from './components/category-filter';

type ProductInfoProps = {
    product: Product;
};

export async function Filters() {

    const categories = await axios.get(process.env.NEXT_PUBLIC_API_URL + `products/categories`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        console.error(error);
    });


    return (
        <>
           <CategoryFilter categories={categories}  />
        </>
    );
}
