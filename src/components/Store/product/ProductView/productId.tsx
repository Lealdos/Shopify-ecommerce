'use client';
import Image from 'next/image';
import { ProductViewItemsOrder } from './addProductsToViewProduct';
import { redirect } from 'next/navigation';
interface ProductViewProps {
    product: ProductType;
}

export function ProductId({ product }: ProductViewProps) {
    if (!product) {
        redirect('/store');
    }

    // remove html <P>  tags from description
    const removeHtmlTags = (htmlText: string) => {
        return htmlText.replace(/<\/?[^>]+(>|$)/g, '');
    };
    return (
        <div className=' flex flex-col md:flex-row  items-center w-full justify-around'>
            <section className='justify-center items-center w-[350px] h-[350px] m-2 '>
                <Image
                    className='rounded-md md:m-4'
                    loading='eager'
                    src={product?.image}
                    width={500}
                    height={500}
                    quality={80}
                    alt={product?.title}
                />
            </section>
            <section className='text-center m-4 flex flex-col justify-center item-center '>
                <h1 className='text-3xl underline mb-4'>{product?.title}</h1>
                <p className='text-balance  md:max-w-[650px] '>
                    {removeHtmlTags(product?.description)}
                </p>
                <span className='text-green-400 text-xl my-2'>
                    $ {product?.price} Unit
                </span>
                <div className='flex flex-col gap-1 justify-center items-center '>
                    <span>Max Quantity available: {product?.quantity}</span>
                    <ProductViewItemsOrder
                        maxQuantity={product?.quantity}
                        product={product}
                    />
                </div>
            </section>
        </div>
    );
}
