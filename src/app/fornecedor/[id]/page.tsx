import AddFeedBackButton from '@/app/_components/add-feedback-button'
import DeleteProjectButton from '@/app/_components/delete-projetc-button'
import EditProjectButton from '@/app/_components/edit-project-button'
import Feedback from '@/app/_components/feedback-item'
import Navbar from '@/app/_components/nav-bar'
import NavbarNoAuth from '@/app/_components/nav-bar-no-auth'
import ProjectItemDetail from '@/app/_components/project-item-detail'
import ProjectNotFound from '@/app/_components/project-not-found'
import { Button } from '@/app/_components/ui/button'
import { getProjectById } from '@/app/_data/get-project-by-id'
import { auth } from '@clerk/nextjs/server'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const projeto = await getProjectById({ params })
  if (!projeto) {
    return <ProjectNotFound />
  }

  const { userId } = await auth()

  return (
    <>
      {userId ? <Navbar /> : <NavbarNoAuth />}
      <div className="space-y-6 p-8">
        <div className="flex justify-between">
          <Button>
            <Link href={userId ? '/fornecedor' : '/'}>
              <div className="flex items-center space-x-2">
                <ChevronLeftIcon />
                Voltar
              </div>
            </Link>
          </Button>
          {!userId && <AddFeedBackButton projectId={projeto.id} />}
        </div>
        <ProjectItemDetail project={projeto} />
        {userId && (
          <div className="space-x-4">
            <EditProjectButton project={projeto} />
            <DeleteProjectButton projectId={projeto.id} />
          </div>
        )}
        <Feedback projectId={projeto.id} />
      </div>
    </>
  )
}

export default ProjectPage
