'use server'

import { db } from '@/app/_lib/prisma'
import type { Prisma } from '@prisma/client'
import { createProjectSchema } from './schema'

export const createProject = async (params: Prisma.ProjetoCreateInput) => {
  createProjectSchema.parse(params)
  await db.projeto.create({
    data: params,
  })
}
