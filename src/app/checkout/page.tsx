'use client'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { PageTitle } from '@/components/products/page-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Price from '@/components/ui/price';
import { useState } from 'react';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/store/cartSlice';

const formSchema = z.object({
    firstname: z.string().min(3).max(50),
    lastname: z.string().min(3).max(50),
    address: z.string(),
    district: z.string(),
    city: z.string(),
    postalCode: z.string(),
    phoneNumber: z.string(),
})

export default function CheckoutPage() {

    const router = useRouter();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const subTotal = cartItems.reduce((total, item) => total + item.price * item.amount, 0);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })


    if (orderCompleted) {
        return (
            <div className="text-center mt-10 space-y-5">
                <Check className="w-20 h-20 text-green-500 mx-auto mt-4" />

                <h1 className="text-2xl font-bold">Order Completed!</h1>

                <p className="text-gray-500 mt-2">Thank you for your purchase. Your order has been successfully placed.</p>

                <Button className="w-[50%] sm:w-[30%]  mt-4" variant="success" onClick={() => { router.push('/') }}>Continue Shopping</Button>
            </div>
        );
    }

    function onSubmit() {
        setLoading(true);
        setTimeout(() => {
            dispatch(clearCart());
            setOrderCompleted(true);
        }, 2000);
    }

    return (
        <div className="flex flex-col gap-4 mb-3">
            <PageTitle title={"Checkout"} />
            <div className='flex flex-col gap-3'>
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-3">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between text-gray-500 font-light text-md gap-4">
                                    <p>{item.title} x {item.amount}</p>
                                    <Price className='whitespace-nowrap' value={item.price * item.amount} />
                                </div>
                            ))}
                            <div className="flex justify-between text-gray-500 font-light text-md gap-2 whitespace-nowrap">
                                <p>Subtotal</p>
                                <Price value={subTotal} />
                            </div>
                            <div className="flex justify-between text-gray-500 font-light text-md gap-2 whitespace-nowrap">
                                <p>Shipping Fee</p>
                                <p>$ 5</p>
                            </div>
                            <div className="flex justify-between text-lg font-semibold mt-2 gap-2 whitespace-nowrap">
                                <p>Total Price:</p>
                                <Price value={subTotal + 5} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className='mb-4'>
                    <CardHeader>
                        <CardTitle>Delivery Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="flex gap-4 flex-col sm:flex-row">
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className='flex-1'>
                                                    <FormLabel>First Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="First Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>

                                            </>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className='flex-1'>
                                                    <FormLabel>Last Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Last Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>

                                            </>
                                        )}
                                    />
                                </div>

                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <div className='flex-1'>
                                        <div className="flex flex-col w-full gap-4  ">
                                            <FormField
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <>
                                                        <FormItem>
                                                            <FormLabel>City</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="City" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    </>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="district"
                                                render={({ field }) => (
                                                    <>
                                                        <FormItem>
                                                            <FormLabel>District</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="District"  {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    </>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className='flex-1'>
                                                    <FormLabel>Address</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Address" className='h-[5lh]' {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                </div>
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="postalCode"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className="flex-1">
                                                    <FormLabel>Postal Code</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Postal Code" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className="flex-1">
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Phone Number" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                </div>

                                <Button disabled={loading} className='w-full mt-2' variant={"default"} type="submit">
                                    {
                                        loading ?
                                            <Loader2 className="w-6 h-6 animate-spin" /> :
                                            <span>Complete Order</span>
                                    }
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>


            </div>
        </div>
    );
}