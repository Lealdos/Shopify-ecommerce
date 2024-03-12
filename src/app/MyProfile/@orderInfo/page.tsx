import { getCustomerOrders } from "app/services/shopify/graphql/costumerOrders";

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  console.log('order: ',ordersInfo);
  return (
    <div>
      <section>
        <h2>Orders</h2>
        {ordersInfo.orders?.map((order:any) => (
          <p key={order.orderNumber}>{order.orderNumber}</p>
        ))}
      </section>
    </div>
  );
}