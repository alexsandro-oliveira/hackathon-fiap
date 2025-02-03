'use server'

import { db } from '@/app/_lib/prisma'
import { auth } from '@clerk/nextjs/server'

import { revalidatePath } from 'next/cache'
import { upsertProjectSchema } from './schema'
import type { DeadlineOpton } from '@prisma/client'

interface UpsertProjectParams {
  id?: string
  name: string
  description: string
  fornecedor: string
  phones: string
  region: string
  deadline: DeadlineOpton
}

export const upsertProject = async (params: UpsertProjectParams) => {
  upsertProjectSchema.parse(params)
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }
  await db.projeto.upsert({
    update: { ...params, userId },
    create: { ...params, userId },
    where: { id: params.id ?? '' },
  })
  revalidatePath('/fornecedor')
}
