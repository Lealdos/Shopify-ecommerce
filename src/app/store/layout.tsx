export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-screen ">
      <nav>Navegación de las categorías</nav>
      {children}
    </main>
  )
}