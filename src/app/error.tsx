'use client';
import Image from 'next/image';

export default function GlobalError({ reset }: ErrorPageProps) {
    return (
        <main className='justify-center flex flex-col items-center'>
            <h1 className='text-6xl bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent'>
                An error has been occurred
            </h1>
            <Image
                className='rounded-lg'
                src='/images/error.png'
                width={500}
                height={500}
                alt='Error'
            />
            <p className='text-4xl bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent'>
                Something went wrong, just give us one more chance and please
                try again
            </p>
            <button
                className='my-8 bg-gradient-to-r from-purple-500 to-blue-600  text-white font-bold py-2 px-4 rounded hover:shadow-md hover:shadow-purple-400'
                onClick={reset}
            >
                Try again
            </button>
        </main>
    );
}
