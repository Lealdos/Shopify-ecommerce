import { getCollections } from '@/services/shopify/collections';
import Link from 'next/link';

interface CollectionsProps {
    id: string;
    title: string;
    handle: string;
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const collections = await getCollections();

    return (
        <main>
            <nav className=' my-6 mx-4 flex flex-col justify-center items-center gap-4 md:flex-row md:gap-4 md:justify-between p-4'>
                {collections.map((collection: CollectionsProps) => (
                    <Link
                        className='text-cyan-400 hover:text-blue-700 rounded-lg bg-gradient-to-r from-violet-800 to-blue-800 p-2  '
                        key={collection.id}
                        href={'/store/' + collection.handle}
                    >
                        {collection.title}
                    </Link>
                ))}
            </nav>
            {children}
        </main>
    );
}
