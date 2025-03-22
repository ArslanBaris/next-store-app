'use client';
import { Product } from '@/types/product';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { getCategoryName } from '@/utils/utils';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

type ProductInfoProps = {
    product: Product;
};

export function ProductInfo({ product }: ProductInfoProps) {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            amount: 1,
        }));
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-lg">
                <Image
                    className="p-3"
                    src={product.image}
                    alt={product.title}
                    fill
                    objectFit='contain'
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-7 ">
                    <div className='flex flex-col gap-2'>
                        <div className="text-2xl font-bold">{product.title}</div>
                        <Badge className='' variant={"secondary"}>{getCategoryName(product.category)}</Badge>
                    </div>
                    <span className="text-primary text-2xl font-semibold">${(product.price).toFixed(2)} </span>
                    <p className="text-sm">{product.description}</p>
                    <Button variant={"default"} onClick={handleAddToCart}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}
