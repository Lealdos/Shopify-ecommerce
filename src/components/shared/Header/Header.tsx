import Link from 'next/link';

import { cookies } from 'next/headers';
import { validateAccessToken } from '@/utils/auth/ValidateAccessToken';
import dynamic from 'next/dynamic';

const ShoppingCart = dynamic(() => import('@/components/shared/ShoppingCart'), {
    ssr: false,
});

interface Costumer {
    firstName: string;
    email: string;
}
export async function Header() {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken')?.value;
    const costumer: Costumer = await validateAccessToken();

    return (
        <header className='border-green-800 border-2 rounded-md m-2'>
            <nav className='mx-4 px-4 py-2'>
                <ul className='flex flex-row items-center justify-between gap-4 text-sky-300 '>
                    <div className='flex flex-row gap-7'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/store'>Store</Link>
                        </li>
                        <li>
                            <Link href='/Chat'>Chat</Link>
                        </li>
                    </div>
                    {!token && (
                        <li>
                            <Link href='/SignUp'>SignUp</Link>
                        </li>
                    )}{' '}
                    {!token && (
                        <li>
                            <Link href='/Login'>Login</Link>
                        </li>
                    )}
                    <div className='flex flex-row gap-8'>
                        {costumer && (
                            <li>
                                <Link href='/Profile'>
                                    {costumer.firstName}
                                </Link>
                            </li>
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
