import { env } from 'app/config/env';

export const shopifyUrls = {
    products: {
        all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
        one: (id: string) =>
            `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json?ids=${id}`,
        mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/476133196095/products.json`,
    },

    collections: {
        allCollections: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json`,
        CollectionProducts: (id: string) =>
            `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/${id}/products.json`,
    },
};
