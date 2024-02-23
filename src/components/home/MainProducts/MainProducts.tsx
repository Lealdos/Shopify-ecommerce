import Image from 'next/image';
import { Product } from 'app/models/interface/products';

import { getProducts } from '@/services/shopify/products';

export async function MainProducts() {
    const products = await getProducts();
    const prueba = await fetch('http://localhost:3000/api');
    const productos = await prueba.json();

    return (
        <section className='w-full h-full m-2'>
            <h3 className='text-3xl text-sky-500 text-center italic my-10'>
                ✨ New products released!
            </h3>

            <div className='flex flex-col gap-4 mx-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 grid-rows-[200px_minmax(900px,_1fr)_100px]'>
                {productos?.map((product: Product) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <article
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
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
