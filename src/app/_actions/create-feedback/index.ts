'use server'

import { db } from '@/app/_lib/prisma'

import { revalidatePath } from 'next/cache'
import { createFeedbackSchema } from './schema'

interface createFeedbackParams {
  id?: string
  name: string
  feedback: string
  projectId: string
}

export const createFeedback = async (params: createFeedbackParams) => {
  createFeedbackSchema.parse(params)
  const project = await db.projeto.findUnique({
    where: {
      id: params.projectId,
    },
  })

  if (!project) {
    throw new Error('Projeto não encontrado')
  }

  await db.feedback.create({
    data: {
      ...params,
    },
  })
  revalidatePath('/projetos')
  revalidatePath('/fornecedores')
}
