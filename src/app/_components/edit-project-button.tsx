'use client'

import { Button } from '@/app/_components/ui/button'
import type { Projeto } from '@prisma/client'
import { useState } from 'react'
import UpsertProjectDialog from './upsert-project-dialog'
import { PencilIcon } from 'lucide-react'

interface EditProjectButtonProps {
  project: Projeto
}

const EditProjectButton = ({ project }: EditProjectButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button variant="outline" onClick={() => setDialogIsOpen(true)}>
        <PencilIcon />
        Editar
      </Button>
      <UpsertProjectDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...project }}
        projectId={project.id}
      />
    </>
  )
}

export default EditProjectButton
