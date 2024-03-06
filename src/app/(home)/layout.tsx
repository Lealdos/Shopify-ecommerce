import { Hero } from 'app/components/home/Hero';


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Hero />
            {children}
        </>
    );
}
