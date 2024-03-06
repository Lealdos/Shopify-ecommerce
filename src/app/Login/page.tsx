import { LoginForm } from "@/components/Login";

export default function LoginPage() {

  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()

  //   const formData = new FormData(event.currentTarget as HTMLFormElement)
  //   const email = formData.get('email')
  //   const password = formData.get('password')

  //   const response = await fetch('/api/auth/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, password }),
  //   })

  //   if (response.ok) {
  //     redirect('/store')
  //   } else {
  //     // Handle errors
  //   }
  // }



  return (
    <LoginForm/>
  )
}