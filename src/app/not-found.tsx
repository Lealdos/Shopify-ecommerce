import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className='flex flex-col items-center mb-36'>
            <h1 className='text-[200px] font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>
                404
            </h1>
            <Image src='/images/404.png' alt='404' width={300} height={300} />
            <h2 className='text-5xl bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent'>
                Page not found - error 404
            </h2>
            <p className='text-2xl bg-gradient-to-r from-blue-500 to-violet-800 bg-clip-text text-transparent'>
                {`Don't worry, we can help you to return to the store!`}
            </p>
            <Link
                className='my-8 bg-gradient-to-r from-violet-500 to-blue-600  text-white font-bold py-2 px-4 rounded hover:shadow-md hover:shadow-emerald-400'
                href='/store'
            >
                Back to store
            </Link>
        </main>
    );
}
