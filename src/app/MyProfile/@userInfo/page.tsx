import { validateAccessToken } from 'app/utils/auth/ValidateAccessToken';

export default async function MyAccountPage() {
    const customer = await validateAccessToken();
    console.log('customer: ', customer);
    return (
        <div>
            <section>
                <h1>Welcome back {customer.name}</h1>
                <p>email: {customer.email}</p>
            </section>
        </div>
    );
}
