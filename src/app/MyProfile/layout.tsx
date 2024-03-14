interface MyAccountLayoutProps {
    children: React.ReactNode;
    ordersInfo: React.ReactNode;
    userInfo: React.ReactNode;
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {
    return (
        <div className='h-screen flex flex-col mx-4 justify-normal items-center'>
            {props.children}
            {props.userInfo}
            {props.ordersInfo}
        </div>
    );
}
