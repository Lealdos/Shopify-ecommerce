import { env } from 'app/config/env';

export const shopifyUrls = {
    products: {
        all: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
        one: (id: string) =>
            `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json?ids=${id}`,
    },

    collections: {
        allCollections: `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
        CollectionProducts: (id: string) =>
            `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
    },
};
