import type { Projeto } from '@prisma/client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ptBR } from 'date-fns/locale'
import { format, formatDistance } from 'date-fns'
import { Label } from './ui/label'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { formatDeadline } from '../_utils/format'
import { db } from '../_lib/prisma'
import { Badge } from './ui/badge'

interface ProjectItemProps {
  project: Projeto
}

const ProjectItem = async ({ project }: ProjectItemProps) => {
  const { userId } = await auth()
  const comments = await db.feedback.findMany({
    where: {
      projectId: project.id,
    },
  })

  return (
    <>
      {userId ? (
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
              <div>
                <Label>Prazo de validade:</Label>
                <p className="text-sm">{formatDeadline(project.deadline)} </p>
              </div>
              <time
                className="text-sm"
                title={format(
                  new Date(project.createdAt),
                  "dd 'de' MMMM 'de' yyyy",
                  { locale: ptBR }
                )}>
                Criado{' '}
                {formatDistance(new Date(), new Date(project.createdAt), {
                  locale: ptBR,
                })}{' '}
                atrás
              </time>
            </CardFooter>
            <div className="p-6">
              <Label className="mr-4">Comentários:</Label>
              <Badge className="bg-primary hover:bg-primary">
                {comments.length}
              </Badge>
            </div>
          </Link>
        </Card>
      ) : (
        <Card>
          <Link href={`/fornecedor/${project.id}`}>
            <CardHeader>
              <Label>Titulo:</Label>
              <CardTitle className="text-xl">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label>Descrição:</Label>
                <p className="line-clamp-2 overflow-ellipsis">
                  {project.description}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm">
                <Label>Fornecedor:</Label>
                <p>{project.fornecedor}</p>
              </div>
              <time
                className="text-sm"
                title={format(
                  new Date(project.createdAt),
                  "dd 'de' MMMM 'de' yyyy",
                  { locale: ptBR }
                )}>
                Criado{' '}
                {formatDistance(new Date(), new Date(project.createdAt), {
                  locale: ptBR,
                })}{' '}
                atrás
              </time>
            </CardFooter>
            <div className="p-6">
              <Label className="mr-4">Comentários:</Label>
              <Badge className="bg-primary hover:bg-primary">
                {comments.length}
              </Badge>
            </div>
          </Link>
        </Card>
      )}
    </>
  )
}

export default ProjectItem
