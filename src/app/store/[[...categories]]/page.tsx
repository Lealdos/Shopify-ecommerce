import { ProductsWrapper } from '@/components/Store/ProductsWrapper';
import { MainProducts } from '@/components/home/MainProducts';
import { getProducts } from '@/services/shopify';
interface CategoryProps {
    params: {
        categories: string[];
    };
    searchParams?: string;
}

export default async function Category(props: Readonly<CategoryProps>) {
    const { categories } = props.params;
    const products = await getProducts();

    return (
        <div className='flex flex-col items-center w-full h-full '>
            <ProductsWrapper products={products} />
        </div>
    );
}
