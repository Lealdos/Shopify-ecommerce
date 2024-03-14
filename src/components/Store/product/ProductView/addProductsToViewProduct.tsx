'use client';
import useShoppingCart from '@/hooks/useShoppingCartCounter';
import { SyntheticEvent, useState } from 'react';
import { FaOpencart } from 'react-icons/fa6';

interface ProductViewItemsOrderProps {
    maxQuantity: number;
    product: ProductType;
}

export function ProductViewItemsOrder({
    maxQuantity,
    product,
}: ProductViewItemsOrderProps) {
    const { addToCart } = useShoppingCart();
    const [counter, setCounter] = useState(1);

    const handleSubtract = (event: SyntheticEvent) => {
        event.preventDefault();
        if (counter === 1) return;
        setCounter(counter - 1);
    };

    const handleAdd = (event: SyntheticEvent) => {
        event.preventDefault();
        if (counter === maxQuantity) return;
        setCounter(counter + 1);
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        addToCart({
            title: product.title,
            price: product.price,
            quantity: counter,
            id: product.id,
            image: typeof product.image === 'string' ? product.image : '',
            handle: product.handle,
            merchandiseId: product.gql_id,
        });
    };

    return (
        <div className='flex flex-row gap-4 justify-center items-center  p-2 rounded-md text-lg  '>
            <div className=' p-2 rounded-md flex flex-row  justify-center items-center  gap-6 bg-gradient-to-r from-violet-600 to-cyan-600 min-w-32 '>
                <button className='hover:scale-125' onClick={handleSubtract}>
                    -
                </button>
                <p className='min-w-5'>{counter}</p>
                <button className='hover:scale-125' onClick={handleAdd}>
                    +
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <button
                    className='p-2 flex flex-row gap-4 justify-center items-center rounded-md bg-gradient-to-r from-blue-600 to-violet-600  hover:scale-105 '
                    type='submit'
                >
                    <FaOpencart className='text-2xl' />
                    <span>Add to cart</span>
                </button>
            </form>
        </div>
    );
}
