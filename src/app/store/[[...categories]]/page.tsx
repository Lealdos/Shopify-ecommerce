import { ProductsWrapper } from 'app/components/Store/ProductsWrapper';
import { Metadata } from 'next';
import {
    getCollectionProducts,
    getCollections,
} from 'app/services/shopify/collections';
import { getProducts } from 'app/services/shopify/products';

interface CategoryProps {
    params: {
        categories: string[];
    };
    searchParams?: string;
}



export const metadata:Metadata = {
    
    description: 'Product Page',
    keywords: 'Product Page',

} 

export default async function Category(props: Readonly<CategoryProps>) {
    const { categories } = props.params;
    let products = [];
    const collections = await getCollections();

    if (categories?.length > 0) {
        const selectedCollectionId = collections.find(
            (collection: { handle: string }) =>
                collection.handle === categories[0]
        )?.id;
        if (selectedCollectionId) {
            products = await getCollectionProducts(selectedCollectionId);
            console.log(products);
        }
    } else {
        products = await getProducts();
    }

    return (
        <div className=' flex flex-col items-center w-full h-full '>
            <ProductsWrapper products={products} />
        </div>
    );
}
