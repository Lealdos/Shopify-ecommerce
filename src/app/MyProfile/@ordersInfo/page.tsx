import { getCustomerOrders } from 'app/services/shopify/graphql/costumerOrders';

export default async function ordersInfo() {
    const ordersInfo = await getCustomerOrders();
    console.log('order: ', ordersInfo);
    return (
        <div>
            <h2 className='text-2xl'>Your orders:</h2>
            <section className='flex flex-col gap-4 bg-blue-800 p-4 rounded-md '>
                {ordersInfo.orders?.map((order: Order) => (
                    <a
                        href={order.statusUrl}
                        key={order.orderNumber}
                        className=' bg-red-500 rounded-lg p-2 border-2 border-black'
                    >
                        <h3>Order {order.name}</h3>
                        {order.lineItems.edges.map(({ node: product }) => (
                            <div key={product.title}>
                                <span>{product.title}</span>
                                <span className=''>
                                    x{product.currentQuantity}
                                </span>
                            </div>
                        ))}
                    </a>
                ))}
            </section>
        </div>
    );
}
