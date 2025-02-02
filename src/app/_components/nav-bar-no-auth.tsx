'use client'

import Link from 'next/link'
import Image from 'next/image'

const NavbarNoAuth = () => {
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex flex-row gap-2 items-center">
        <h1 className="font-bold text-3xl text-primary">CONEXÃO</h1>
        <h2 className="font-bold text-2xl">ESCOLA</h2>
      </div>

      <Image src="/logo.svg" alt="Logo" width={80} height={60} />
      <div className="flex items-center gap-10">
        <Link href="/" className={'font-bold text-primary'}>
          Professor
        </Link>

        <Link href="/fornecedor" className={'font-bold text-muted-foreground'}>
          Fornecedor
        </Link>
      </div>
    </nav>
  )
}

export default NavbarNoAuth
