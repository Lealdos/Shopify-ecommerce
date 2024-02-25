import Image from 'next/image';
import { ProductViewItemsOrder } from './addProductsToViewProduct';
interface ProductViewProps {
    product: ProductType;
}

export function ProductId({ product }: ProductViewProps) {
    console.log(product);
    return (
        <div className=' flex flex-row  items-center w-full justify-around'>
            <section className='justify-center items-center '>
                <Image
                    className='rounded-md m-4'
                    loading='eager'
                    src={product?.image}
                    width={500}
                    height={500}
                    quality={80}
                    alt={product?.title}
                />
            </section>
            <section className='flex flex-col justify-between  text-balance '>
                <p className='text-balance '>{product?.description}</p>
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
