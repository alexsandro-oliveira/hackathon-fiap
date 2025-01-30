'use server'

import { db } from '@/app/_lib/prisma'
import { DeleteProjectSchema } from './schema'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const deleteProject = async ({ projectId }: DeleteProjectSchema) => {
  await db.projeto.delete({
    where: {
      id: projectId,
    },
  })
  revalidatePath('/fornecedor')
  revalidatePath('/projetos')
  redirect('/fornecedor')
}
