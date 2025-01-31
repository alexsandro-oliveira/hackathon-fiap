'use client'

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* ESQUERDA */}
      <div className="flex flex-row gap-2">
        <h1 className="font-bold text-3xl text-primary">CONEXÃO</h1>
        <h2 className="font-bold text-2xl">ESCOLA</h2>
      </div>

      {/* DIREITA */}
      <div className="flex items-center gap-10">
        <Link href="/fornecedor" className={'font-bold text-primary'}>
          Fornecedor
        </Link>
      </div>
      <div>
        <UserButton showName afterSignOutUrl="/login" />
      </div>
    </nav>
  )
}

export default Navbar
