import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

interface Collection {
    id: string;
    title: string;
    handle: string;
}

export const getCollections = async (): Promise<Collection[]> => {
    try {
        const response = await fetch(shopifyUrls.collections.allCollections, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch collections');
        }

        const { smart_collections } = await response.json();
        const cleanCollections: Collection[] = smart_collections.map(
            (collection: Collection): Collection => {
                return {
                    id: collection.id,
                    title: collection.title,
                    handle: collection.handle,
                };
            }
        );
        return cleanCollections;
    } catch (error) {
        console.log(error);
        throw new Error('An error occurred while fetching collections');
    }
};

export const getCollectionProducts = async (
    id: string
): Promise<ProductType[]> => {
    try {
        const response = await fetch(
            shopifyUrls.collections.CollectionProducts(id),
            {
                headers: new Headers({
                    'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
                }),
            }
        );
        const { products }: { products: ProductType[] } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
        throw new Error('An error occurred while fetching collections');
    }
};
