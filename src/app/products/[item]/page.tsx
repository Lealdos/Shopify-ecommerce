import { ProductId } from '@/components/Store/product/ProductView';
import { getProducts } from '@/services/shopify/products';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';


interface ProductPageProps {
    params: {
        id: string;
    };
    searchParams: {
        id: number;
    };
}

export async function generateMetadata(
    { searchParams }: ProductPageProps
  ): Promise<Metadata> {
    // read route params
    const foundProducts = await getProducts(searchParams.id.toString());
    const product = foundProducts[0]
   
    return {
      title: product?.title,
      description: product?.description,
      keywords: product?.tags,
      openGraph: {
        images: [product?.image],
      },
    }
  }

export default async function ProductPage(props: ProductPageProps) {
    const searchParams = props.searchParams;

    if (!searchParams.id) {
        redirect('/store');
    }
    const foundProduct = await getProducts(searchParams.id.toString());
    const product = foundProduct[0]

    return (
        <main className='flex flex-col gap-4 items-center justify-evenly h-screen'>
            <ProductId product={product} />
            <section className=' m-2'>{product?.tags}</section>
        </main>
    );
}
