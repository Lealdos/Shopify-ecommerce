import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollectionProducts,getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"


interface CategoryProps {
    params: {
        categories: string[];
    };
    searchParams?: string;
}

export default async function Category(props: Readonly<CategoryProps>) {
    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    
    if (categories?.length > 0 && collections!=undefined) {
      const selectedCollectionId = collections?.find((collection:{handle:string}) => collection.handle === categories[0]).id
      products = await getCollectionProducts(selectedCollectionId)
    }else {
      products = await getProducts()
    }

    return (
        <div className=' flex flex-col items-center w-full h-full '>
            <ProductsWrapper products={products} />
        </div>
    );
}
