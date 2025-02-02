'use server'

import { db } from '@/app/_lib/prisma'

import { revalidatePath } from 'next/cache'
import { upsertFeedbackSchema } from './schema'

interface UpsertFeedbackParams {
  id?: string
  name: string
  feedback: string
  projectId: string
}

export const upsertFeedback = async (params: UpsertFeedbackParams) => {
  upsertFeedbackSchema.parse(params)

  await db.feedback.upsert({
    update: params,
    create: params,
    where: { id: params.id ?? '' },
  })
  revalidatePath('/fornecedor')
}
