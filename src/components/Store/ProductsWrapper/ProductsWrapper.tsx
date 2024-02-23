import { ProductCard } from "../ProductCard";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
      <div className="min-w-full justify-center items-center flex flex-col gap-4 md:justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 grid-rows-[200px_minmax(900px,_1fr)_100px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
};
