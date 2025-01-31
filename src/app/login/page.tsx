import { SignInButton } from '@clerk/nextjs'
import { Button } from '../_components/ui/button'
import { LogInIcon } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const LoginPage = async () => {
  const { userId } = await auth()
  if (userId) {
    redirect('/fornecedor')
  }

  return (
    <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
      <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
      <p className="mb-8 text-muted-foreground">
        O Hackathon é uma plataforma para cadastrar e disponibilizar seus
        projetos para as escolas.
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
