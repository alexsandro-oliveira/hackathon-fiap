import { auth } from '@clerk/nextjs/server'
import AddProjectButton from '../_components/add-project-button'
import Navbar from '../_components/nav-bar'
import ProjectItem from '../_components/project-item'
import { db } from '../_lib/prisma'
import { redirect } from 'next/navigation'
import Search from '../_components/search'

const FornecedorPage = async () => {
  const { userId } = await auth()
  if (!userId) {
    redirect('/login')
  }

  const projetos = await db.projeto.findMany({
    where: {
      userId,
    },
  })

  return (
    <div className="w-full">
      <Navbar />
      <main className="overflow-y-auto">
        <div className="space-y-6 p-6">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-2xl font-bold">Meus Projetos</h1>
            <AddProjectButton />
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className="space-y-6 p-6">
          {projetos.length > 0 ? (
            projetos.map((projeto) => (
              <ProjectItem key={projeto.id} project={projeto} />
            ))
          ) : (
            <p>Você não tem nenhum projeto cadastrado.</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default FornecedorPage
