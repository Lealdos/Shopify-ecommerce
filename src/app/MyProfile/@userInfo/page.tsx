import { validateAccessToken } from 'app/utils/auth/ValidateAccessToken';

export const dynamic = 'force-dynamic';


export default async function MyAccountPage() {
    const { email, firstName } = await validateAccessToken();
    return (
        <section className=' bg-zinc-900/50 rounded-md  p-4'>
            <h1>Welcome back {firstName}</h1>
            <p>email: {email}</p>
        </section>
    );
}
