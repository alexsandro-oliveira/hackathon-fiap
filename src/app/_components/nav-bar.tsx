'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* ESQUERDA */}
      <div>
        <h1 className="font-bold text-3xl">HACKATHON FIAP</h1>
      </div>

      {/* DIREITA */}
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'font-bold text-primary'
              : 'text-muted-foreground'
          }>
          Home
        </Link>

        <Link
          href="/fornecedor"
          className={
            pathname === '/fornecedor'
              ? 'font-bold text-primary'
              : 'text-muted-foreground'
          }>
          Fornecedor
        </Link>
        <Link
          href="/projetos"
          className={
            pathname === '/projetos'
              ? 'font-bold text-primary'
              : 'text-muted-foreground'
          }>
          Projetos
        </Link>
      </div>
      <div>
        <Button variant="ghost">Logar</Button>
      </div>
    </nav>
  )
}

export default Navbar
