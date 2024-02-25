interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    images: image[];
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    body_html?: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
    variants: Variant[];
}

interface Variant {
    id: number;
    product_id: number;
    title: string;
    price: string;
    sku: any;
    position: number;
    inventory_policy: string;
    compare_at_price: string;
    fulfillment_service: string;
    inventory_management: any;
    option1: string;
    option2: any;
    option3: any;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: any;
    grams: number;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: boolean;
    admin_graphql_api_id: string;
    image_id: any;
}

interface image {
    id: number;
    alt: any;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: any[];
}
