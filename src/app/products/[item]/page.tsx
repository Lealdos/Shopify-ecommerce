import { ProductId } from '@/components/Store/product/ProductView';
import { getProducts } from '@/services/shopify/products';
import { redirect } from 'next/navigation';

interface ProductPageProps {
    searchParams: {
        id: number;
    };
}

export default async function ProductPage(props: ProductPageProps) {
    const searchParams = props.searchParams;

    if (!searchParams.id) {
        redirect('/store');
    }
    const product = await getProducts(searchParams.id.toString());

    return (
        <main className='flex flex-col gap-4 items-center justify-evenly '>
            <ProductId product={product[0]} />
            <section className='w-full h-full m-2'>{product[0]?.tags}</section>
        </main>
    );
}
