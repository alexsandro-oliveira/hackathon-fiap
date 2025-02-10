'use client'

import { Button } from './ui/button'

import { useState } from 'react'
import UpsertFeedbackDialog from './create-feedback-dialog'
import { PlusIcon } from 'lucide-react'

interface AddFeedBackButtonProps {
  projectId: string
}

const AddFeedBackButton = ({ projectId }: AddFeedBackButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button className="font-bold" onClick={() => setDialogIsOpen(true)}>
        <PlusIcon />
        Adicionar Comentário
      </Button>
      <UpsertFeedbackDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        projectId={projectId}
      />
    </>
  )
}

export default AddFeedBackButton
