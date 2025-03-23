'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaUserAstronaut } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { useRouter } from 'next/navigation';
const ShoppingCart = dynamic(() => import('@/components/shared/ShoppingCart'), {
    ssr: false,
});

interface Costumer {
    firstName: string;
    email: string;
}

export interface HeaderProps {
    token: string;
    costumer: Costumer;
}

export function Header({ token, costumer }: HeaderProps) {
    const router = useRouter();
    const handleSignOut = async () => {
        try {
            const response = await fetch('/api/signOut', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                router.replace('/');
                router.refresh();
            }
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <header className='border-green-800 border-2 rounded-md my-2 mx-4 '>
            <nav className='mx-4 px-4 py-2'>
                <ul className='flex flex-row items-center justify-between gap-4 text-sky-300 '>
                    <div className='flex flex-row gap-7'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/store'>Store</Link>
                        </li>
                    </div>
                    <div className='flex gap-6 justify-center items-center '>
                        {token ? (
                            <>
                                <li>
                                    <Link
                                        href='/MyProfile'
                                        className=' flex gap-2 text-ellipsis items-center'
                                    >
                                        <FaUserAstronaut />

                                        {costumer.firstName}
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        type='button'
                                        className='flex gap-2 items-center'
                                        onClick={() => handleSignOut()}
                                    >
                                        <GoSignOut
                                            size={20}
                                            className='inline'
                                        />
                                        Sign out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href='/Login'>Login</Link>
                                </li>

                                <li>
                                    <Link href='/SignUp'>Sign Up</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link href='/Cart'>
                                <ShoppingCart />
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
