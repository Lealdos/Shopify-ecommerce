import { getProducts } from '@/services/shopify/products';
import { getCustomerOrders } from 'app/services/shopify/graphql/costumerOrders';

export default async function ordersInfo() {
    const products = await getProducts();

    const ordersInfo = await getCustomerOrders();
    //  const azul = ordersInfo.orders.filter((CustomerOrders:any) => CustomerOrders.lineItems.edges[0].node.title )
    // console.log('leo',azul)
    const prueba = products.filter(
        (product: ProductType) => product.title === 'azul'
    );
    const imagen: string[] = prueba.map((product: ProductType) => {
        if (typeof product.image === 'string') {
            return product.image; // Si 'image' es una cadena, la devolvemos directamente
        } else {
            return product.image.src; // Si 'image' es un objeto, accedemos a su propiedad 'src'
        }
    });

    // console.log(ordersInfo)

    return (
        <div className='bg-zinc-900/50 p-4 rounded-md '>
            <h2 className='text-xl pb-2'>Your orders:</h2>
            <section className='flex flex-col gap-4  '>
                {ordersInfo.orders?.map((order: Order, index: number) => (
                    <a
                        href={order.statusUrl}
                        key={order.orderNumber}
                        className=' bg-red-700/60 rounded-lg p-2'
                    >
                        <h3>Order {order.name}</h3>
                        {order.lineItems.edges.map(({ node: product }) => (
                            <div key={product.title}>
                                <span>{product.title} </span>
                                <span className=''>
                                    x {product.currentQuantity}
                                </span>
                            </div>
                        ))}
                    </a>
                ))}
            </section>
        </div>
    );
}
