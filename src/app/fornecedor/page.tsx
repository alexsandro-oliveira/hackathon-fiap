import Navbar from '../_components/nav-bar'
import ProjectItem from '../_components/project-item'
import { Button } from '../_components/ui/button'
import { db } from '../_lib/prisma'

const FornecedorPage = async () => {
  const projetos = await db.projeto.findMany({})

  return (
    <>
      <Navbar />
      <div className="space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Meus Projetos</h1>
          <Button>Novo Projeto</Button>
        </div>

        {projetos.map((projeto) => (
          <ProjectItem key={projeto.id} project={projeto} />
        ))}
      </div>
    </>
  )
}

export default FornecedorPage
