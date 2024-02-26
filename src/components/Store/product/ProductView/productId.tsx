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
            <section className='flex flex-col justify-between  text-balance '>
                <p className='text-balance '>
                    {removeHtmlTags(product?.description)}
                </p>
                <h1 className=''>{product?.title}</h1>
                <span className=''>$ {product?.price}</span>
                <div>
                    <span>Max Quantity {product?.quantity}</span>
                    <ProductViewItemsOrder maxQuantity={product?.quantity} />
                </div>
            </section>
        </div>
    );
}
