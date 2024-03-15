interface MyAccountLayoutProps {
    children: React.ReactNode;
    ordersInfo: React.ReactNode;
    userInfo: React.ReactNode;
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {
    return (
        <main className="flex justify-center items-start h-screen">
            <div className="my-8 ">

                {props.children}

                <div className=' mt-10 flex flex-col mx-4 gap-8  sm:flex-row  bg-gray-800/50 p-4 rounded-md'>
                    {props.userInfo}
                    {props.ordersInfo}
                </div>
            </div>
        </main>
    );
}
