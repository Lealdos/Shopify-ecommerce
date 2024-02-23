import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/articulo/${product.handle}?id=${product.id}`}>
      <article className="min-h-[300px] cursor-pointer mx-6 ">
          <Image
            className="object-cover opacity-75 rounded-md w-[350px] h-[350px]  "
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <div className="flex flex-row justify-between items-center p-2 max-w-[350px] text-left text-lg ">
            <h3>{product.title}</h3>
            <span className="text-green-400 text-nowrap">${product.price} USD</span>
          </div>
      </article>
    </Link>
  );
};
