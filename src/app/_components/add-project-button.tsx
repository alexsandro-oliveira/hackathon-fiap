'use client'

import { PlusIcon } from 'lucide-react'
import { Button } from './ui/button'

import { useState } from 'react'
import UpsertProjectDialog from './upsert-project-dialog'

const AddProjectButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}>
        <PlusIcon />
        Adicionar Projeto
      </Button>
      <UpsertProjectDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </>
  )
}

export default AddProjectButton
