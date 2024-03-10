'use client';
import Image from 'next/image';
import Link from 'next/link';

import useShoppingCart from '@/hooks/useShoppingCartCounter';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/shared/Loader';

export default function CartPage() {
    const { cart, removeCartItem } = useShoppingCart();
    const [cartServer, setCartServer] = useState<CartItem[]>([]);

    useEffect(() => {
        setCartServer(cart);
    }, [cart, removeCartItem]);

    if (!cartServer) {
        return (
            <div className='h-screen flex flex-col justify-center items-center'>
                <Loader />;
            </div>
        );
    } else {
        return (
            <main className='h-screen flex flex-col justify-start items-center gap-4 m-8'>
                <h1>Your shopping cart: </h1>

                {cart?.length === 0 ? (
                    <div className='my-8 flex flex-col justify-center items-center gap-10'>
                        <span className='text-xl'>Your cart is empty 😥</span>
                        <Link
                            className='text-2xl bg-gradient-to-r from-violet-500 to-blue-600  text-white  py-2 px-4 rounded hover:shadow-md hover:scale-105'
                            href='/store'
                        >
                            Go shopping
                        </Link>
                    </div>
                ) : (
                    cartServer?.map((product) => (
                        <div
                            suppressHydrationWarning={true}
                            key={product.id}
                            className='relative self-baseline w-[380px]'
                        >
                            <Link
                                href={`/products/${product.handle}?id=${product.id}`}
                                className='flex flex-row-reverse gap-2 justify-between items-start  border-2 rounded-md p-2 '
                            >
                                <div className='flex flex-col '>
                                    <span className='text-md w-[200px] '>
                                        {product.title}
                                    </span>
                                    <span>{product.price}$</span>
                                    <span>{product.quantity} :units</span>
                                </div>
                                <Image
                                    className='rounded-md '
                                    src={product.image}
                                    width={150}
                                    height={150}
                                    alt={product.title}
                                />
                            </Link>
                            <button
                                className='text-white absolute bottom-4 right-[126px] border-red-400 border-2 rounded-lg bg-red-500 p-[2px] hover:bg-red-800'
                                onClick={() => removeCartItem(product)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </main>
        );
    }
}
