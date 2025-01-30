import { auth } from '@clerk/nextjs/server'
import AddProjectButton from '../_components/add-project-button'
import Navbar from '../_components/nav-bar'
import ProjectItem from '../_components/project-item'
import { db } from '../_lib/prisma'
import { redirect } from 'next/navigation'

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
    <>
      <Navbar />
      <div className="space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Meus Projetos</h1>
          <AddProjectButton />
        </div>
        {projetos.length > 0 ? (
          projetos.map((projeto) => (
            <ProjectItem key={projeto.id} project={projeto} />
          ))
        ) : (
          <p>Você não tem nenhum projeto</p>
        )}
      </div>
    </>
  )
}

export default FornecedorPage
