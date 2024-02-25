interface CategoryProps {
    params: {
        categories: string[];
    };
    searchParams?: string;
}

export default function ProductPage(props: Readonly<CategoryProps>) {
    return <h1>Product Page</h1>;
}
