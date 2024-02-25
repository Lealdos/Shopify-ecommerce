import { env } from 'app/config/env';
import { shopifyUrls } from './urls';

export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
            }),
            next: { revalidate: 60 }, // 1 minute
        });
        const { products } = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (id?: string) => {
    try {
        if (id) {
            const response = await fetch(shopifyUrls.products.one(id), {
                headers: new Headers({
                    'X-Shopify-Access-Token': env.SHOPIFY_TOKEN,
                }),
            });
            const { products } = await response.json();
            const transformedProducts = products.map((product: ProductType) => {
                return {
                    id: product.id,
                    gql_id: product.variants[0].admin_graphql_api_id,
                    title: product.title,
                    description: product.body_html,
                    price: product.variants[0].price,
                    image: product.images[0].src,
                    quantity: product.variants[0].inventory_quantity,
                    handle: product.handle,
                    tags: product.tags,
                };
            });
            return transformedProducts;
        }
    } catch (error) {
        console.log(error);
        throw new Error('An error occurred while fetching products');
    }
};
