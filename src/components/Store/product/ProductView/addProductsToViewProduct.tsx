'use client';
import { SyntheticEvent, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

interface ProductViewItemsOrderProps {
    maxQuantity: number;
}

export const ProductViewItemsOrder = ({
    maxQuantity,
}: ProductViewItemsOrderProps) => {
    const [counter, setCounter] = useState(1);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    };

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

    return (
        <div className='flex flex-row gap-4 justify-center items-center  p-2 rounded-md text-lg  '>
            <div className=' p-2 rounded-md flex flex-row  justify-center items-center  gap-6 bg-gradient-to-r from-violet-600 to-cyan-600 min-w-32 '>
                <button onClick={handleSubtract}>-</button>
                <p className='min-w-5'>{counter}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <form onSubmit={handleSubmit} className=''>
                <button
                    className='p-2 flex flex-row gap-4 justify-center items-center rounded-md bg-gradient-to-r from-blue-600 to-violet-600  '
                    type='submit'
                >
                    <FaCartShopping />
                    <span>Add to cart</span>
                </button>
            </form>
        </div>
    );
};
