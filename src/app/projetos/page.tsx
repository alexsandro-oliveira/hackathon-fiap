import Navbar from '../_components/nav-bar'
import { DataTable } from '../_components/ui/data-table'
import { db } from '../_lib/prisma'
import { projectColumns } from './_columns'

const ProjetosPage = async () => {
  const projetos = await db.projeto.findMany({})

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Projetos</h1>
        <div className="flex h-full flex-col space-y-6 overflow-hidden">
          <DataTable columns={projectColumns} data={projetos} />
        </div>
      </div>
    </>
  )
}

export default ProjetosPage
