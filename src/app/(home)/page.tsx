import { MainProducts } from 'app/components/home/MainProducts';
import { Description } from 'app/components/home/Description';

export default function Home() {
    return (
        <main className='flex flex-col items-center  min-h-screen '>
            <Description />
            <MainProducts />
        </main>
    );
}
