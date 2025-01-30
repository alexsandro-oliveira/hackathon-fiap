import type { Projeto } from '@prisma/client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ptBR } from 'date-fns/locale'
import { formatDistance } from 'date-fns'
import { Label } from './ui/label'
import Link from 'next/link'

interface ProjectItemProps {
  project: Projeto
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <Card>
      <Link href={`/fornecedor/${project.id}`}>
        <CardHeader>
          <Label>Titulo:</Label>
          <CardTitle className="text-xl">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label>Descrição:</Label>
          <p className="line-clamp-3 overflow-ellipsis">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="gap-1 text-xs justify-end">
          <p>Criado</p>
          <p>
            {formatDistance(new Date(), new Date(project.createdAt), {
              locale: ptBR,
            })}{' '}
            atrás
          </p>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default ProjectItem
