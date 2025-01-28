import { db } from '../_lib/prisma'

const ProjetosPage = async () => {
  const projetos = await db.projeto.findMany({})

  return (
    <div>
      {projetos.length === 0 && <p>Nenhum projeto encontrado.</p>}

      {projetos.map((projeto) => (
        <div key={projeto.id}>
          <p>{projeto.name}</p>
          <p>{projeto.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjetosPage
