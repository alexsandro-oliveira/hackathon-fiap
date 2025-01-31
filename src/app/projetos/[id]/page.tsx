import DeleteProjectButton from '@/app/_components/delete-projetc-button'
import EditProjectButton from '@/app/_components/edit-project-button'
import ProjectItem from '@/app/_components/project-item'
import ProjectNotFound from '@/app/_components/project-not-found'
import { Button } from '@/app/_components/ui/button'
import { getProjectById } from '@/app/_data/get-project-by-id'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

const ProjectItemPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const projeto = await getProjectById({ params })

  if (!projeto) {
    return <ProjectNotFound />
  }

  return (
    <div className="space-y-6 overflow-hidden p-8">
      <Button>
        <Link href="/fornecedor">
          <div className="flex items-center space-x-2">
            <ChevronLeftIcon />
            Voltar
          </div>
        </Link>
      </Button>
      <ProjectItem project={projeto} />
      <div className="space-x-4">
        <EditProjectButton project={projeto} />
        <DeleteProjectButton projectId={projeto.id} />
      </div>
    </div>
  )
}

export default ProjectItemPage
