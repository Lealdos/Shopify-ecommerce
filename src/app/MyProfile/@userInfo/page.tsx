import { validateAccessToken } from "app/utils/auth/ValidateAccessToken";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();
  console.log('customer: ',customer)
  return (
    <div>
      <section>
        <h2>Your info</h2>
        <h1>Bienvenido {customer.name}</h1>
        <p>email: {customer.email}</p>
      </section>
    </div>
  );
}