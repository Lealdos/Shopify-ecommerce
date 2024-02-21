import { MainProducts } from '@/components/home/MainProducts';

interface CategoryProps {
    params: {
        categories: string[];
    };
    searchParams?: string;
}

export default function Category(props: Readonly<CategoryProps>) {
    return (
        <div className='flex flex-col items-center w-full h-full '>
            <h1>Categoria dinámica: </h1>
            <MainProducts />
        </div>
    );
}
