import { db } from '../_lib/prisma'
import Search from '../_components/search'
import NavbarNoAuth from '../_components/nav-bar-no-auth'
import ProjectItem from '../_components/project-item'

const HomePage = async () => {
  const projetos = await db.projeto.findMany({})

  return (
    <>
      <NavbarNoAuth />

      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Lista de Projetos</h1>
        </div>

        <div>
          <Search />
        </div>

        {projetos.length > 0 ? (
          projetos.map((projeto) => (
            <ProjectItem key={projeto.id} project={projeto} />
          ))
        ) : (
          <p>Não tem nenhum projeto cadastrado.</p>
        )}
      </div>
    </>
  )
}

export default HomePage
