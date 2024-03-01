import { NewUserForm } from "app/components/SignUp/NewAccountForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Future store: Sign up ',
  icons: {
      icon: '/favicon.svg', // /public path
  },
};

export default function NewAccountPage() {
  return(
  <main className="flex flex-col gap-4 items-center justify-center">

    <NewUserForm />
  </main>
  );
}
