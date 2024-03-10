'use client';
import useShoppingCart from '@/hooks/useShoppingCartCounter';
import { FaOpencart } from 'react-icons/fa';

export default function ShoppingCart() {
    const { cart } = useShoppingCart();

    return (
        <div className='flex flex-row justify-center items-center gap-1 relative'>
            <span
                className=' text-[12px] text-sky-400 rounded-full
                p-[2px]  absolute bottom-[0.65rem] left-[1.7rem] '
            >
                {cart.length}
            </span>
            <FaOpencart className='fill-sky-400 text-2xl ' />
        </div>
    );
}
