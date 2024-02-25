import Image from 'next/image';
import { Product } from 'app/models/interface/products';
import Link from 'next/link';

export async function MainProducts() {
    const productData = await fetch('http://localhost:3000/api');
    const products = await productData.json();

    return (
        <section className='w-full h-full m-2'>
            <h3 className='text-3xl text-sky-500 text-center italic my-10'>
                ✨ New products released!
            </h3>

            <div className='flex flex-col gap-4 mx-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 grid-rows-[200px_minmax(900px,_1fr)_100px]'>
                {products?.map((product: Product) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <Link
                            href={`/products/${product.handle}?id=${product.id}`}
                            key={product.id}
                            className='relative z-10 min-h-[300px]   cursor-pointer'
                        >
                            <p className=' relative p-2 z-30 max-w-[200px] text-left text-2xl '>
                                {product.title}
                            </p>
                            <Image
                                className='object-cover z-20 opacity-75 rounded-md w-[250px] h-[250px]  '
                                src={imageSrc}
                                fill
                                alt={product.title}
                                loading='eager'
                            />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
