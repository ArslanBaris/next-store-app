'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { PageTitle } from "@/components/products/page-title";
import BasketItem from '@/components/basket/basket-item';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import Price from '@/components/ui/price';
import { useRouter } from 'next/navigation';
import { twJoin } from 'tailwind-merge';


export default function BasketPage() {
    const router = useRouter();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const subTotal = cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);
    const summaryCardRef = useRef<HTMLDivElement>(null);
    const [bottomPadding, setBottomPadding] = useState(0);

    useEffect(() => {
        if (summaryCardRef.current) {
            setBottomPadding(summaryCardRef.current.offsetHeight);
        }
    }, []);

    return (
        <>
            <div className="flex flex-col gap-4 mb-3" style={{ paddingBottom: bottomPadding }}>
                <PageTitle title={"Basket"} />
                <div className='flex flex-row gap-3'>

                    <div className={twJoin('w-full md:w-2/3', !totalItems && 'md:w-full')}>
                        <Card>
                            <CardContent>
                                {
                                    cartItems.length > 0 ? (
                                        cartItems.map(item => (
                                            <BasketItem key={item.id} item={item} />
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-500 min-h-[300px] items-center flex flex-col justify-center gap-2">
                                            <ShoppingCart />
                                            Your basket is empt
                                            <Button className="w-[50%] sm:w-[30%]  mt-4" variant="success" onClick={() => { router.push('/') }}>Continue Shopping</Button>

                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </div>
                    <div className={twJoin('hidden md:block w-1/3', !totalItems && 'md:hidden')}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Summary</CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <div className="flex justify-between text-gray-500 font-light text-md">
                                    <p>Subtotal</p>
                                    <Price value={subTotal} />
                                </div>
                                <div className="flex justify-between text-gray-500 font-light  text-md">
                                    <p>Shipping Fee</p>
                                    <p>$ 5</p>
                                </div>
                                <div className="flex justify-between  text-lg font-semibold mt-2">
                                    <p>Total Price:</p>
                                    <Price value={subTotal + 5} />
                                </div>
                                <div className="mt-5">
                                    <Button className='w-full' variant={"default"} onClick={() => { router.push("/checkout") }} >Go to Checkout</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>


            <Card ref={summaryCardRef} className={twJoin(!totalItems && 'hidden', 'w-screen fixed left-0 bottom-0 md:hidden')}>
                <CardHeader className='pb-0 gap-0'>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        <div className="flex justify-between text-gray-500 font-light text-md">
                            <p>Subtotal</p>
                            <p>$ {subTotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-gray-500 font-light  text-md">
                            <p>Shipping Fee</p>
                            <p>$ 5</p>
                        </div>
                        <div className="flex justify-between  text-lg font-semibold mt-2 mb-2">
                            <p>Total Price:</p>
                            <p>$ {(subTotal + 5).toFixed(2)}</p>
                        </div>
                    </div>
                    <Button className='w-full' variant={"default"} onClick={() => { router.push("/checkout") }} >Continue to Checkout</Button>
                </CardContent>
            </Card>
        </>
    );
}
