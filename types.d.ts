interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    body_html?: string;
    published_at?: string;
    created_at?: string;
    updated_at?: string;
    
}
