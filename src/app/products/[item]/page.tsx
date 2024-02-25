import { ProductId } from '@/components/Store/product/ProductView';
import { getProduct } from '@/services/shopify/products';

interface ProductPageProps {
    searchParams: {
        id: number;
    };
}

export default async function ProductPage(props: ProductPageProps) {
    const searchParams = props.searchParams;
    const product = await getProduct(searchParams.id.toString());

    return (
        <main className='flex flex-col gap-4 items-center justify-evenly '>
            <ProductId product={product[0]} />
            <section className='w-full h-full m-2'>{product[0].tags}</section>
        </main>
    );
}
