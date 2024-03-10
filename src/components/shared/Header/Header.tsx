import Link from 'next/link';

import { cookies } from 'next/headers';

export function Header() {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken')?.value;
    console.log(token);

    return (
        <header className='border-green-800 border-2 rounded-md m-2'>
            <nav className=' p-2'>
                <ul className='flex flex-row items-center justify-around gap-4 text-red-300 '>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/store'>Store</Link>
                    </li>
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
                </ul>
            </nav>
        </header>
    );
}
