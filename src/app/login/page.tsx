import { SignInButton } from '@clerk/nextjs'
import { Button } from '../_components/ui/button'
import { LogInIcon } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const LoginPage = async () => {
  const { userId } = await auth()
  if (userId) {
    redirect('/fornecedor')
  }

  return (
    <div className="flex h-full max-w-[550px] flex-col p-8 justify-center mx-auto">
      <div className="flex justify-center mb-8">
        <Image src="/logo.svg" alt="Logo" width={300} height={60} />
      </div>
      <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
      <p className="mb-8 text-muted-foreground">
        O CONEXÃO Escola é uma plataforma online que oferece uma solução
        inovadora para conectar profissionais voluntários ao ambiente escolar
        público brasileiro, criando uma ponte entre aqueles que desejam
        compartilhar conhecimentos e habilidades com estudantes que podem se
        beneficiar dessas experiências
      </p>

      <SignInButton>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </SignInButton>
      <Button className="mt-4" variant="outline" asChild>
        <Link href="/">Voltar</Link>
      </Button>
    </div>
  )
}

export default LoginPage
