import { auth } from '@clerk/nextjs/server'
import Navbar from '../_components/nav-bar'
import { db } from '../_lib/prisma'
import NavbarNoAuth from '../_components/nav-bar-no-auth'
import { Button } from '../_components/ui/button'
import Link from 'next/link'
import { ChevronLeftIcon } from 'lucide-react'
import ProjectItem from '../_components/project-item'

interface ProjectsPageProps {
  searchParams: {
    search?: string
  }
}

const ProjectsPage = async ({ searchParams }: ProjectsPageProps) => {
  const projetos = await db.projeto.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: 'insensitive',
      },
    },
  })
  const { userId } = await auth()

  return (
    <div>
      {userId ? <Navbar /> : <NavbarNoAuth />}

      <div className="space-y-6 p-6">
        <Button>
          <Link href={userId ? '/fornecedor' : '/'}>
            <div className="flex items-center space-x-2">
              <ChevronLeftIcon />
              Voltar
            </div>
          </Link>
        </Button>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams?.search}
          &quot;
        </h2>
        <div className="space-y-6">
          {projetos.map((projeto) => (
            <ProjectItem key={projeto.id} project={projeto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
