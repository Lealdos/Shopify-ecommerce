'use client';
import { useState } from 'react';
import { FaOpencart } from 'react-icons/fa';

export function ShoppingCart() {
    const [itemCount, setItemCount] = useState(0);

    return (
        <div className='flex flex-row justify-center items-center gap-1 relative'>
            <span
                className='bg-gradient-to-bl from-blue-500 to-violet-600  text-[10px] text-sky-400 rounded-full
                p-[2px]  absolute bottom-[0.65rem] left-[1.7rem] '
            >
                {itemCount}
            </span>
            <FaOpencart className='fill-sky-400 text-2xl ' />
        </div>
    );
}
