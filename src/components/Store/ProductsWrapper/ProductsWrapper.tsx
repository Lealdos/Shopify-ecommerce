import { ProductCard } from '../ProductCard';

interface ProductsWrapperProps {
    products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
    return (
        <div className=''>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
