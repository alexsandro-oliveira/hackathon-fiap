'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../_lib/prisma'
import type { Fornecedor, Rating } from '@prisma/client'

interface CreateProjectParams {
  id?: string
  name: string
  description: string
  fornecedorId: Fornecedor['id']
  rating: Rating[]
}

export const createProject = async (params: CreateProjectParams) => {
  await db.projeto.create({
    data: { ...params },
  })
  revalidatePath('/fornecedor')
}
