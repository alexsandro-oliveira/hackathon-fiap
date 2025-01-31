import type { Projeto } from '@prisma/client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ptBR } from 'date-fns/locale'
import { formatDistance } from 'date-fns'
import { Label } from './ui/label'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import GetUserName from '../_data/get-userName-clerk'

interface ProjectItemProps {
  project: Projeto
}

const ProjectItem = async ({ project }: ProjectItemProps) => {
  const { userId } = await auth()

  return (
    <>
      <Card>
        <Link href={`/fornecedor/${project.id}`}>
          <CardHeader>
            <Label>Titulo:</Label>
            <CardTitle className="text-xl">{project.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <Label>Descrição:</Label>
            <p className="line-clamp-2 overflow-ellipsis">
              {project.description}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            {!userId && (
              <div>
                <Label>Fornecedor:</Label>
                <p>{project.fornecedor}</p>
              </div>
            )}
            <div className="flex flex-row gap-1 text-xs justify-end">
              <p>Criado</p>
              <p>
                {formatDistance(new Date(), new Date(project.createdAt), {
                  locale: ptBR,
                })}{' '}
                atrás
              </p>
              <p>
                por <GetUserName />
              </p>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </>
  )
}

export default ProjectItem
