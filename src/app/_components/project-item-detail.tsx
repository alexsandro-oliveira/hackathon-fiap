import type { Projeto } from '@prisma/client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ptBR } from 'date-fns/locale'
import { format, formatDistance } from 'date-fns'
import { Label } from './ui/label'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { formatDeadline } from '../_utils/format'

interface ProjectItemDetailProps {
  project: Projeto
}

const ProjectItemDetail = async ({ project }: ProjectItemDetailProps) => {
  const { userId } = await auth()

  return (
    <>
      {userId ? (
        <Card>
          <Link href={`/fornecedor/${project.id}`}>
            <CardHeader>
              <Label>Titulo:</Label>
              <CardTitle className="text-xl">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label>Descrição:</Label>
                <p>{project.description}</p>
              </div>
              <div className="text-sm">
                <Label>Fornecedor:</Label>
                <p>{project.fornecedor}</p>
              </div>
              <div className="text-sm">
                <Label>Contato:</Label>
                <p>{project.phones}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <Label>Prazo de validade:</Label>
                <p className="text-sm">{formatDeadline(project.deadline)} </p>
              </div>
              <div className="text-sm">
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
              </div>
            </CardFooter>
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
                <p>{project.description}</p>
              </div>
              <div className="text-sm">
                <Label>Fornecedor:</Label>
                <p>{project.fornecedor}</p>
              </div>
              <div className="text-sm">
                <Label>Contato:</Label>
                <p>{project.phones}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm">
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
          </Link>
        </Card>
      )}
    </>
  )
}

export default ProjectItemDetail
